/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageVisParam = {"opacity":1,"bands":["NDVI"],"max":0.7,"palette":["00b8ff","9fff04","78e600","34b300","007209"]},
    table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_regioesimediatas_2021");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var rn = table;
var natal = table.filter(ee.Filter.eq('CD_RGI', '240001'));
var SAPFSC = table.filter(ee.Filter.eq('CD_RGI', '240002'));
var canguaretama = table.filter(ee.Filter.eq('CD_RGI', '240003'));
var santaCruz = table.filter(ee.Filter.eq('CD_RGI', '240004'));
var joaoCamara = table.filter(ee.Filter.eq('CD_RGI', '240005'));
var SPP = table.filter(ee.Filter.eq('CD_RGI', '240006'));
var caico = table.filter(ee.Filter.eq('CD_RGI', '240007'));
var curraisNovos = table.filter(ee.Filter.eq('CD_RGI', '240008'));
var mossoro = table.filter(ee.Filter.eq('CD_RGI', '240009'));
var pauDosFerros = table.filter(ee.Filter.eq('CD_RGI', '240010'));
var acu = table.filter(ee.Filter.eq('CD_RGI', '240011'));

Map.setCenter(-36, -6, 8);

//---- adquirindo coleção de imagem da Copernicus ----//
var sentinel = ee.ImageCollection('COPERNICUS/S2')
                  .select(['B.*'])
                  .filterDate('2020-02-01', '2022-06-01')
                  .filterBounds(rn)
                  //---- Pré-filtrar para ter menos pixels nublados ----//
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 1))
                  .sort('CLOUDY_PIXEL_PERCENTAGE')
                  .first();

// Fator escala
var image = sentinel.multiply(0.0001);
// ndvi
	//---- cálculo do NDVI ----//
var ndvi = image.expression('(nir - red) / (nir + red)', {
	'nir':image.select('B8'),
	'red':image.select('B4'),
}).rename('NDVI');

var clippedNDVI = ndvi.clip(rn);
var ndviNatal = ndvi.clip(natal);
var ndviSAPFSC = ndvi.clip(SAPFSC);
var ndviCanguaretama = ndvi.clip(canguaretama);
var ndviSantaCruz = ndvi.clip(santaCruz);
var ndviJoaoCamara = ndvi.clip(joaoCamara);
var ndviSPP = ndvi.clip(SPP);
var ndviCaico = ndvi.clip(caico);
var ndviCurraisNovos = ndvi.clip(curraisNovos);
var ndviMossoro = ndvi.clip(mossoro);
var ndviPauDosFerros = ndvi.clip(pauDosFerros);
var ndviAcu = ndvi.clip(acu);

//---- adicionando camadas ao mapa ----//
Map.addLayer(rn, {}, 'RN polygon');
//Map.addLayer(natal, {}, 'natal polygon');
Map.addLayer(clippedNDVI, imageVisParam, 'NDVI');

//---- exportando imagem para o Google Drive ----//
Export.image.toDrive({
  image: clippedNDVI,
  scale: 10,
  maxPixels: 1e10,
  folder: 'EE_exports',
  description: 'RN_NDVI',
  region: rn
});