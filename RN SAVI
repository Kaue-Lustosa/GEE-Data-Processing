/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageVisParam = {"opacity":1,"bands":["SAVI"],"max":0.7,"palette":["00b8ff","9fff04","78e600","34b300","007209"]};
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//---- criação do recorte do RN ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");
var rn = admin.filter(ee.Filter.eq('ADM1_CODE', 684));
var geometry = rn.geometry();
Map.setCenter(-36, -6, 8);

//---- função para mascarar as nuvens ----//
function maskS2clouds(image) {
  var qa = image.select('QA60').clip(rn);

  //---- bits 10 e 11 são nuvens e cirrus, respectivamente ----//
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;
  
  //---- ambas as flags devem ser setadas para zero, indicando clear conditions ----//
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

//---- adquirindo coleção de imagem da Copernicus ----//
var image = ee.ImageCollection('COPERNICUS/S2')
                  .filterDate('2023-01-01', '2023-02-03')
                  //---- Pré-filtrar para ter menos pixels nublados ----//
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 30))
                  .filterBounds(rn)
                  .map(maskS2clouds)
                  .median();

//---- cálculo do SAVI ----//
var savi = image.expression('((nir - red) / (nir + red)) * (1 + L)',
  {
    'nir': image.select('B8'),
    'red': image.select('B4'),
    'L': 0.8
  });

//---- reduzindo a opacidade para futuros cálculos de soma ----//
var reduced_opacity_savi = image.expression('savi * 1', {
  'savi':savi,
}).rename('SAVI');
var savi_image = image.addBands(reduced_opacity_savi);
var clippedSavi = savi_image.clip(rn);

//---- adicionando camadas ao mapa ----//
Map.addLayer(rn, {}, 'RN polygon');
Map.addLayer(clippedSavi, imageVisParam, 'SAVI');

//---- exportando imagem para o Google Drive ----//
Export.image.toDrive({
  image: clippedSavi,
  scale: 10,
  maxPixels: 1e10,
  description: 'RN_SAVI',
  region: geometry
});