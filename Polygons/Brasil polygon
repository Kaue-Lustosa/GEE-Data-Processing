//---- função para criação do recorte do Brasil ----//
var admin = ee.FeatureCollection("FAO/GAUL/2015/level0");
var br = admin.filter(ee.Filter.eq('ADM0_CODE', 37));
var geometry = br.geometry();
Map.setCenter(-45, -12, 4);

//---- transformando o recorte em imagem  ----//
var reducer = ee.Reducer.mean(); // definindo a função de redução

var mask = admin.reduceToImage({
  properties: ['ADM0_CODE'],
  reducer: ee.Reducer.first().unweighted(),
}); // filtrando a coleção
var clippedMask = mask.clip(br); // restringindo o limite da imagem
var visParam = {"opacity":1,"palette":["#f7ffcc"]}; //criando o parâmetro de visualização de imagem

//---- adição do produto final ao mapa ----//
Map.addLayer(br, {}, 'BR polygon');
Map.addLayer(clippedMask, visParam, 'mask');

//---- exportando imagem pro drive  ----//
Export.image.toDrive({
  image: clippedMask,
  description: 'Região do Brasil',
  folder: 'EE_exports',
  region: br,
  scale: 30,
  maxPixels: 1e13
});