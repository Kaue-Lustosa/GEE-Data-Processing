/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_regioesimediatas_2021");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
Map.setCenter(-36, -6, 8);

//---- recorte da área de interesse ----//
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

Map.addLayer(table, {}, 'Regiões Intermediárias', false);
Map.addLayer(SAPFSC, {}, 'Santo Antônio/Passa e Fica/Santa Cruz');
Map.addLayer(canguaretama, {}, 'Canguaretama');
Map.addLayer(santaCruz, {}, 'Santa Cruz');
Map.addLayer(joaoCamara, {}, 'Joao Camara');
Map.addLayer(SPP, {}, 'São Paulo do Potengi');
Map.addLayer(caico, {}, 'Caicó');
Map.addLayer(curraisNovos, {}, 'Currais Novos');
Map.addLayer(mossoro, {}, 'Mossoró');
Map.addLayer(pauDosFerros, {}, 'Pau Dos Ferros');