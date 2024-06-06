//---- criação do recorte do RN ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");
var rn = admin.filter(ee.Filter.eq('ADM1_CODE', 684));
var geometry = rn.geometry();
Map.addLayer(rn, {}, 'RN polygon');
Map.setCenter(-36, -6, 8);