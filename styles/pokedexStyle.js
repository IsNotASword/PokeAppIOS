'use strict';

var StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  loader: {
    marginTop: 64,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  loaderText: {
    color: 'gray'
  },

  pokemon: {
    padding: 20
  },

  pokemonInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20 
  },

  pokemonInfoText: {
    fontSize: 20
  }
});