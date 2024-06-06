var table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_mesorregioes_2022");

Map.setCenter(-36, -6, 8);

//---- recorte da área de interesse ----//
var regiaoOeste = table.filter(ee.Filter.eq('NM_MESO', 'Oeste Potiguar'));
var regiaoCentral = table.filter(ee.Filter.eq('NM_MESO', 'Central Potiguar'));
var regiaoAgreste = table.filter(ee.Filter.eq('NM_MESO', 'Agreste Potiguar'));
var regiaoLeste = table.filter(ee.Filter.eq('NM_MESO', 'Leste Potiguar'));

Map.addLayer(table, {}, 'mesorregiões', false);
Map.addLayer(regiaoOeste, {}, 'região oeste');
Map.addLayer(regiaoCentral, {}, 'região central');
Map.addLayer(regiaoAgreste, {}, 'região agreste');
Map.addLayer(regiaoLeste, {}, 'região leste');