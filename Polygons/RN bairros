var table = ee.FeatureCollection("projects/ee-kauelustosamorgadoufrn/assets/RN_bairrosNatal_2010");

Map.setCenter(-35.25, -5.8, 11);

//---- recorte da Zona Sul ----//
var alecrim = table.filter(ee.Filter.eq('CD_APONDE', '2408102004018'));
var candelaria = table.filter(ee.Filter.eq('CD_APONDE', '2408102004001'));
var capimMacio = table.filter(ee.Filter.eq('CD_APONDE', '2408102004011'));
var cidadeDaEsperanca = table.filter(ee.Filter.eq('CD_APONDE', '2408102004020'));
var dixSeptRosado = table.filter(ee.Filter.eq('CD_APONDE', '2408102004013'));
var felipeCamarao = table.filter(ee.Filter.eq('CD_APONDE', '2408102004022'));
var igapo = table.filter(ee.Filter.eq('CD_APONDE', '2408102004014'));
var jardimPogresso = table.filter(ee.Filter.eq('CD_APONDE', '2408102004002'));
var lagoaNova = table.filter(ee.Filter.eq('CD_APONDE', '2408102004012'));
var lagoaAzul = table.filter(ee.Filter.eq('CD_APONDE', '2408102004009'));
var nossaSraNazare = table.filter(ee.Filter.eq('CD_APONDE', '2408102004021'));
var nossaSraApresentacao = table.filter(ee.Filter.eq('CD_APONDE', '2408102004010'));
var pajucara = table.filter(ee.Filter.eq('CD_APONDE', '2408102004016'));
var petropolis = table.filter(ee.Filter.eq('CD_APONDE', '2408102004007'));
var pitimbu = table.filter(ee.Filter.eq('CD_APONDE', '2408102004004'));
var pontaNegra = table.filter(ee.Filter.eq('CD_APONDE', '2408102004006'));
var potengi = table.filter(ee.Filter.eq('CD_APONDE', '2408102004015'));
var planalto = table.filter(ee.Filter.eq('CD_APONDE', '2408102004003'));
var quintas = table.filter(ee.Filter.eq('CD_APONDE', '2408102004019'));
var rocas = table.filter(ee.Filter.eq('CD_APONDE', '2408102004023'));
var tirol = table.filter(ee.Filter.eq('CD_APONDE', '2408102004017'));
var tresLagoas = table.filter(ee.Filter.eq('CD_APONDE', '2408102004005'));
var viladeOlavo = table.filter(ee.Filter.eq('CD_APONDE', '2408102004008'));

Map.addLayer(table, {}, 'bairros', false);

//-- imprimindo a Zona Centro-Sul --//
Map.addLayer(alecrim, {}, 'Alecrim');
Map.addLayer(candelaria, {}, 'Candelária');
Map.addLayer(capimMacio, {}, 'Capim Macio');
Map.addLayer(cidadeDaEsperanca, {}, 'Cidade da Esperança');
Map.addLayer(dixSeptRosado, {}, 'Dix-Sept Rosado');
Map.addLayer(felipeCamarao, {}, 'Felipe Camarão');
Map.addLayer(lagoaNova, {}, 'Lagoa Nova');
Map.addLayer(nossaSraNazare, {}, 'Nossa Sra de Nazaré');
Map.addLayer(petropolis, {}, 'Petrópolis');
Map.addLayer(pitimbu, {}, 'Pitimbu');
Map.addLayer(pontaNegra, {}, 'Ponta Negra');
Map.addLayer(planalto, {}, 'Planalto');
Map.addLayer(quintas, {}, 'Quintas');
Map.addLayer(tirol, {}, 'Tirol');

//-- imprimindo a Zona Norte --//
Map.addLayer(igapo, {}, 'Igapó');
Map.addLayer(jardimPogresso, {}, 'Jardim Progresso');
Map.addLayer(lagoaAzul, {}, 'Lagoa Azul');
Map.addLayer(nossaSraApresentacao, {}, 'Nossa Sra da Apresentação');
Map.addLayer(pajucara, {}, 'Pajuçara');
Map.addLayer(potengi, {}, 'Potengi');
Map.addLayer(rocas, {}, 'Rocas');
Map.addLayer(tresLagoas, {}, 'Três Lagoas');
Map.addLayer(viladeOlavo, {}, 'Vila de Olavo');