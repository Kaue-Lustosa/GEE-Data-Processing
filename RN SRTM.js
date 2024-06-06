/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageVisParam = {"opacity":1,"bands":["elevation"],"min":0,"max":900,"palette":["0000ff","00ffff","ffff00","ff0000","ffffff"]};
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//---- recorte da área de interesse ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");  
var rn = admin.filter(ee.Filter.eq('ADM1_CODE', 684));
var geometry = rn.geometry();
print(rn);
Map.setCenter(-36.5, -6, 10);

//---- adquirindo coleção de dados DEM ----//
var dataset = ee.Image('USGS/SRTMGL1_003');
var elevation = dataset.select('elevation');
var clipped_elevation = elevation.clip(rn);

//---- adicionando camadas ao mapa ----//
Map.addLayer(rn, {}, 'RN polygon');
Map.addLayer(clipped_elevation, imageVisParam, 'elevation');

//---- exportando imagem pro drive ----//
Export.image.toDrive({
  image: clipped_elevation,
  scale: 30,
  maxPixels: 1e10,
  description: 'PB_altimetria_SRTM',
  region: geometry
});