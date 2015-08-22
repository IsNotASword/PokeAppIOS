'use strict';

var StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 64
  },

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

  textInputWrapper: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },

  textInput: {
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
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
  },

  noResult: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  noResultText: {
    fontSize: 20,
    color: '#dddddd',
    fontWeight: 'bold'
  }
});