//---- criação do recorte do CE ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");
var ce = admin.filter(ee.Filter.eq('ADM1_CODE', 670));
var geometry = ce.geometry();
Map.addLayer(ce, {}, 'CE polygon');
Map.setCenter(-38, -5.3, 7);