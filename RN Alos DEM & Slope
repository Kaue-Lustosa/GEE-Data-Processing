/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageVisParam = {"opacity":1,"bands":["DSM"],"min":0,"max":800,"palette":["0000ff","00ffff","ffff00","ff0000","ffffff"]},
    imageVisParam2 = {"opacity":1,"bands":["slope"],"max":45,"palette":["0000ff","00ffff","ffff00","ff0000","ffffff"]};
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//---- criação do recorte do RN ----//
var admin = ee.FeatureCollection("FAO/GAUL_SIMPLIFIED_500m/2015/level1");
var rn = admin.filter(ee.Filter.eq('ADM1_CODE', 684));
var geometry = rn.geometry();
Map.addLayer(rn, {}, 'RN polygon');
Map.setCenter(-36, -6, 8);

var dataset = ee.ImageCollection('JAXA/ALOS/AW3D30/V3_2');
var elevation = dataset.select('DSM');

var clippedElevation = elevation.mean().clip(rn);
Map.addLayer(clippedElevation, imageVisParam, 'Elevation');

// Reproject an image mosaic using a projection from one of the image tiles,
	// rather than using the default projection returned by .mosaic().
	var proj = elevation.first().select(0).projection();
	var slopeReprojected = ee.Terrain.slope(elevation.mosaic().setDefaultProjection(proj));
	var clippedSlope = slopeReprojected.clip(rn);
	Map.addLayer(clippedSlope, imageVisParam2, 'Slope');

//---- exportando imagem pro drive  ----//
Export.image.toDrive({
  image: clippedElevation,
  description: 'RN Alos DEM',
  folder: 'EE_exports',
  region: rn,
  scale: 30,
  maxPixels: 1e13
});