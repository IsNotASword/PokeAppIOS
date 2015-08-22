var Baobab = require('baobab');
var pokemonInfoCursor = require('../stateTree').select('pokemonInfo');
var MainActions = require('../actions/MainActions');
var api = require('../api');

module.exports = {
  getPokemonInfo: function(pokemonResourceURI) {
    var REQUEST_URL = api.baseURL + pokemonResourceURI;
    var _this = this;

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData) {
          pokemonInfoCursor.set('info', responseData);
          _this._getDescription(responseData.descriptions[0].resource_uri);
          _this._getSprite(responseData.sprites[0].resource_uri);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  },

  onValueChange: function(value) {
    pokemonInfoCursor.set('selectedIndex', value);
  },

  clean: function() {
    pokemonInfoCursor
      .set('isLoading', true)
      .set('info', {})
      .set('sprite', '')
      .set('selectedIndex', 0)
      .set('description', '');
  },

  _getDescription: function(descriptionID) {
    var REQUEST_URL = api.baseURL + descriptionID;

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        pokemonInfoCursor.set('description', responseData.description);
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  },

  _getSprite: function(spriteID) {
    var REQUEST_URL = api.baseURL + spriteID;

    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData) {
          pokemonInfoCursor
            .set('sprite', 'http://pokeapi.co' + responseData.image)
            .set('isLoading', false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .done();
  }
};