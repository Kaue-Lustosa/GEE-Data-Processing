//---- criação do recorte do RN ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");
var pb = admin.filter(ee.Filter.eq('ADM1_CODE', 679));
var geometry = pb.geometry();
Map.addLayer(pb, {}, 'PB polygon');
Map.setCenter(-36, -7, 8);