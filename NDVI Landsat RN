/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2"),
    table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/BR_UFs");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var pb = table.filter(ee.Filter.eq('SIGLA_UF', 'PB'));
var rn = table.filter(ee.Filter.eq('SIGLA_UF', 'RN'));
var recorte = pb.merge(rn);
Map.setCenter(-36, -6, 8);

function maskL8sr(image) {
  // Bits 3 and 5 are cloud shadow and cloud, respectively.
  var cloudShadowBitMask = (1 << 3);
  var cloudsBitMask = (1 << 5);
  // Get the pixel QA band.
  var qa = image.select('QA_PIXEL');
  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
                 .and(qa.bitwiseAnd(cloudsBitMask).eq(0));
  return image.updateMask(mask);
}

var image = imageCollection.map(maskL8sr);
// 2. Get the least cloudy image in 2015.
var dataset = ee.Image(image
                .filterBounds(recorte)
                .filterDate('2022-01-01', '2022-08-31')
                .sort('CLOUD_COVER')
                .median());

// 3. Compute the Normalized Difference Vegetation Index (NDVI).
var ndvi = dataset.expression('(nir - red) / (nir + red)', {
	'nir':dataset.select('SR_B5'),
	'red':dataset.select('SR_B4'),
}).rename('NDVI');
//var ndviClippedRN = ndvi.clip(rn);
//var ndviClippedPB = ndvi.clip(pb);
var ndviClipped = ndvi.clip(recorte);

// 4. Display the result.
var ndviParams = {min: -1, max: 1, palette:['red', 'yellow', 'green']};
Map.addLayer(pb, {}, 'PB polygon');
Map.addLayer(rn, {}, 'RN polygon');
//Map.addLayer(ndviClippedRN, ndviParams, 'NDVI RN');
//Map.addLayer(ndviClippedPB, ndviParams, 'NDVI PB');
Map.addLayer(ndviClipped, ndviParams, 'NDVI PB&RN')

// 5. Export to Drive
Export.image.toDrive({
  image: ndviClipped,
  description: 'NDVIimage',
  scale: 30,
  region: rn,
  maxPixels: 1e13
});