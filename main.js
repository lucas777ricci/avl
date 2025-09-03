const Bruxa = require('./classes/bruxa');
const Fenix = require('./classes/fenix');
const Fera = require('./classes/fera');
const Ogro = require('./classes/ogro');
const Sereia = require('./classes/sereia');

// Instanciando as criaturas
const bruxa = new Bruxa("Morgana");
const fenix = new Fenix("Fênix Flamejante");
const fera = new Fera("Leão Selvagem");
const ogro = new Ogro("Grog");
const sereia = new Sereia("Ondina");

// Ações das criaturas
bruxa.agir();
fenix.agir();
fera.agir();
ogro.agir();
sereia.agir();

console.log('--- Descansando as criaturas ---');

// Descanso das criaturas
bruxa.descansar();
fenix.descansar();
fera.descansar();
ogro.descansar();
sereia.descansar();
