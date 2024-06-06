/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var rn = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_UF_2022"),
    table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/BR_UFs");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var pb = table.filter(ee.Filter.eq('SIGLA_UF', 'PB'));
var geometry = pb.geometry();
Map.addLayer(pb, {}, 'PB polygon');
Map.setCenter(-36, -6, 8);

// 1. Import the Landsat 8 image
var imageCollection = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED");
// 2. Get the least cloudy image in 2015.
var image = ee.Image(imageCollection.filterBounds(pb)
                           .filterDate('2021-01-01', '2021-12-31')
                           .sort('CLOUD_COVER')
                           .median());

// 3. Compute the Normalized Difference Vegetation Index (NDVI).
var nir = image.select('B8');
var red = image.select('B4');

var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
var ndviClippedRN = ndvi.clip(rn);
var ndviClippedPB = ndvi.clip(pb);

// 4. Display the result.
var ndviParams = {min: -1, max: 1, palette:['red', 'yellow', 'green']};
Map.addLayer(rn, {}, 'RN polygon');
Map.addLayer(ndviClippedRN, ndviParams, 'NDVI RN');
Map.addLayer(ndviClippedPB, ndviParams, 'NDVI PB')

// 5. Export to Drive
Export.image.toDrive({
  image: ndviClippedPB,
  description: 'NDVIimage',
  scale: 30,
  region: rn,
  maxPixels: 1e13
});