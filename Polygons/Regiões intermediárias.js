/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_RG_Intermediarias_2021");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//-- ajustando a região de interesse (roi) --/
Map.setCenter(-36.5, -6, 7);

var regiaoIntermediaria = table;
var natal = table.filter(ee.Filter.eq('NM_RGINT', 'Natal'));
var mossoro = table.filter(ee.Filter.eq('NM_RGINT', 'Mossoró'));
var caico = table.filter(ee.Filter.eq('NM_RGINT', 'Caicó'));

Map.addLayer(regiaoIntermediaria, {}, 'regiões intermediárias', false);
Map.addLayer(natal, {}, 'Região de Natal');
Map.addLayer(mossoro, {}, 'Região de Mossoró');
Map.addLayer(caico, {}, 'Região de Caicó');