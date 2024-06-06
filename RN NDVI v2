/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var imageCollection = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED"),
    table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/Limite_de_Bairros_RN");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//Download NDVI image using Landsat 8 for any study region
Map.setCenter(-35.2, -5.8, 12);

var bairros = table;

var alecrim = table.filter(ee.Filter.eq('BAIRRO', 'Alecrim'));
var areiaPreta = table.filter(ee.Filter.eq('BAIRRO', 'Areia Preta'));
var barroVermelho = table.filter(ee.Filter.eq('BAIRRO', 'Barro Vermelho'));
var bomPastor = table.filter(ee.Filter.eq('BAIRRO', 'Bom Pastor'));
var candelaria = table.filter(ee.Filter.eq('BAIRRO', 'Candel�ria'));
var capimMacio = table.filter(ee.Filter.eq('BAIRRO', 'Capim Macio'));
var cidadeAlta = table.filter(ee.Filter.eq('BAIRRO', 'Cidade Alta'));
var cidadeDaEsperanca = table.filter(ee.Filter.eq('BAIRRO', 'Cidade da Esperan�a'));
var cidadeNova = table.filter(ee.Filter.eq('BAIRRO', 'Cidade Nova'));
var dixSeptRosado = table.filter(ee.Filter.eq('BAIRRO', 'Dix-Sept Rosado'));
var felipeCamarao = table.filter(ee.Filter.eq('BAIRRO', 'Felipe Camar�o'));
var guarapes = table.filter(ee.Filter.eq('BAIRRO', 'Guarapes'));
var igapo = table.filter(ee.Filter.eq('BAIRRO', 'Igap�'));
var lagoaAzul = table.filter(ee.Filter.eq('BAIRRO', 'Lagoa Azul'));
var lagoaNova = table.filter(ee.Filter.eq('BAIRRO', 'Lagoa Nova'));
var lagoaSeca = table.filter(ee.Filter.eq('BAIRRO', 'Lagoa Seca'));
var maeLuiza = table.filter(ee.Filter.eq('BAIRRO', 'M�e Luiza'));
var neopolis = table.filter(ee.Filter.eq('BAIRRO', 'Ne�polis'));
var nordeste = table.filter(ee.Filter.eq('BAIRRO', 'Nordeste'));
var NSdaApresentacao = table.filter(ee.Filter.eq('BAIRRO', 'N.S. da Apresenta��o'));
var NSDoNazare = table.filter(ee.Filter.eq('BAIRRO', 'N.S. do Nazar�'));
var novaDescoberta = table.filter(ee.Filter.eq('BAIRRO', 'Nova Descoberta'));
var pajucara = table.filter(ee.Filter.eq('BAIRRO', 'Paju�ara'));
var parqueDasDunas = table.filter(ee.Filter.eq('BAIRRO', 'Parque das Dunas'));
var petropolis = table.filter(ee.Filter.eq('BAIRRO', 'Petr�polis'));
var pitimbu = table.filter(ee.Filter.eq('BAIRRO', 'Pitimbu'));
var planalto = table.filter(ee.Filter.eq('BAIRRO', 'Planalto'));
var pontaNegra = table.filter(ee.Filter.eq('BAIRRO', 'Ponta Negra'));
var potengi = table.filter(ee.Filter.eq('BAIRRO', 'Potengi'));
var praiaDoMeio = table.filter(ee.Filter.eq('BAIRRO', 'Praia do Meio'));
var quintas = table.filter(ee.Filter.eq('BAIRRO', 'Quintas'));
var redinha = table.filter(ee.Filter.eq('BAIRRO', 'Redinha'));
var ribeira = table.filter(ee.Filter.eq('BAIRRO', 'Ribeira'));
var rocas = table.filter(ee.Filter.eq('BAIRRO', 'Rocas'));
var salinas = table.filter(ee.Filter.eq('BAIRRO', 'Salinas'));
var santosReis = table.filter(ee.Filter.eq('BAIRRO', 'Santos Reis'));
var tirol = table.filter(ee.Filter.eq('BAIRRO', 'Tirol'));

Map.addLayer(bairros, {}, 'Bairros', true);

// 1. Import the Landsat 8 image
var imageCollection = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED");
// 2. Get the least cloudy image in 2015.
var image = ee.Image(imageCollection.filterBounds(bairros)
                           .filterDate('2021-01-01', '2021-12-31')
                           .sort('CLOUD_COVER')
                           .median());

// 3. Compute the Normalized Difference Vegetation Index (NDVI).
var nir = image.select('B8');
var red = image.select('B4');

var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
var ndviClipped = ndvi.clip(parqueDasDunas);


// 4. Display the result.
var ndviParams = {min: -1, max: 1, palette:['red', 'yellow', 'green']};

// 5. Export to Drive
Export.image.toDrive({
  image: ndviClipped,
  description: 'NDVIimage',
  scale: 30,
  region: parqueDasDunas,
  maxPixels: 1e13
});