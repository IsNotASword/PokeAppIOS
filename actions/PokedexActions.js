'use strict';

var api = require('../api');
var pokedexCursor = require('../stateTree').select('pokedex');

module.exports = {
  getPokedex: function() {
    var _this = this;

    fetch(api.pokedex)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.pokemon) {
          _this._sortedPokemons(responseData.pokemon);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  },

  _sortedPokemons: function(pokemons) {
    var sortedPokemons = [];
    var _this = this;

    pokemons.map(function(pokemon) {
      var number = pokemon.resource_uri.split('/')[3];

      if (number < 10000) {
        sortedPokemons.push({
          name: _this._formatName(pokemon.name),
          resourceURI: pokemon.resource_uri,
          number: number
        });
      }
      
    });

    pokedexCursor
      .set('pokemons', sortedPokemons.sort(function(a, b) {
        return a.number - b.number}
      ))
      .set('isLoading', false);
  },

  _formatName: function(name) {
    var newName = name.split('-').join(' ');

    return newName.charAt(0).toUpperCase() + newName.slice(1);
  }
}
