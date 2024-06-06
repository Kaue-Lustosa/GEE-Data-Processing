/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_RG_Intermediarias_2021");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//Download NDVI image using Landsat 8 for any study region
Map.setCenter(-36, -6, 8);
  
//---- recorte da área de interesse ----//
var rn = table;
var natal = table.filter(ee.Filter.eq('NM_RGINT', 'Natal'))
var caico = table.filter(ee.Filter.eq('NM_RGINT', 'Caicó'))
var mossoro = table.filter(ee.Filter.eq('NM_RGINT', 'Mossoró'))

// 1. Import the Landsat 8 image
var l8 = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');

// 2. Get the least cloudy image in 2015.
var image = ee.Image(l8.filterBounds(rn)
                       .filterDate('2020-01-01', '2022-06-01')
                       .sort('CLOUD_COVER')
                       .median());

// 3. Compute the Normalized Difference Vegetation Index (NDVI).
var nir = image.select('B5');
var red = image.select('B4');
var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
var clippedNDVI = ndvi.clip(rn);

//---- cálculo do SAVI ----//
var savi = nir.subtract(red).divide(nir.add(red)).multiply(1.8).rename('SAVI');
var clippedSAVI = savi.clip(rn);
var saviNatal = savi.clip(natal);
var saviCaico = savi.clip(caico);
var saviMossoro = savi.clip(mossoro);

//---- clipando a imagem SAVI às regiões do RN ----//
var clippedSavi = savi.clip(rn);

// 4. Display the result.
Map.setCenter(-36, -6, 8);
var params = {min: -0.41, max: 0.56, palette:['red', 'yellow', 'green']};
Map.addLayer(saviNatal, params, 'SAVI image');
Map.addLayer(saviCaico, params, 'SAVI image');
Map.addLayer(saviMossoro, params, 'SAVI image');

// 5. Export to Drive
Export.image.toDrive({
  image: saviMossoro,
  description: 'SAVIimage',
  scale: 10,
  region: rn,
  maxPixels: 1e13
});