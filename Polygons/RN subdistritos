/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_subdistritos_2000");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//---- recorte da área de interesse ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");  
var rn = admin.filter(ee.Filter.eq('ADM1_CODE', 684));
var geometry = rn.geometry();
print(rn);
Map.setCenter(-35.15, -5.85, 10);

var subdistritos = table;
var ZS = table.filter(ee.Filter.eq('NOME', 'R.A. Sul'));
var ZO = table.filter(ee.Filter.eq('NOME', 'R.A. Oeste'));
var ZL = table.filter(ee.Filter.eq('NOME', 'R.A. Leste'));
var ZN = table.filter(ee.Filter.eq('NOME', 'R.A. Norte'));

Map.addLayer(subdistritos, {}, 'subdistritos', false);
Map.addLayer(ZS, {}, 'Zona Sul');
Map.addLayer(ZO, {}, 'Zona Oeste');
Map.addLayer(ZL, {}, 'Zona Leste');
Map.addLayer(ZN, {}, 'Zona Norte');