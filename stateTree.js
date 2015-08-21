'use strict';

var Baobab = require('baobab');

var tree = new Baobab({
  main: {
    colorBar: 'red'
  },
  pokedex: {
    pokemons: [],
    isLoading: true
  },
  pokemonInfo: {
    info: {},
    isLoading: true,
    sprite: '',
    selectedIndex: 0,
    description: ''
  }
}, {
  autoCommit: true,
  asynchronous: true
});

module.exports = tree;
