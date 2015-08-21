'use strict';

var React = require('react-native');
var mixin = require('baobab-react/mixins');
var PokemonInfo = require('./PokemonInfo');
var PokedexActions = require('../actions/PokedexActions');
var styles = require('../styles/pokedexStyle');

var {
  ActivityIndicatorIOS,
  View,
  ScrollView,
  Text,
  TouchableHighlight
} = React;

var Pokedex = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    pokemons: ['pokedex', 'pokemons'],
    isLoading: ['pokedex', 'isLoading']
  },

  componentDidMount: function() {
    PokedexActions.getPokedex();
  },

  render: function() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicatorIOS size="large" />
          <Text style={styles.loaderText}>Loading...</Text>
        </View>
      );
    }

    return (
      <ScrollView>
        {this._renderPokemons()}
      </ScrollView>
    );
  },

  _renderPokemons: function() {
    var _this = this;

    return this.state.pokemons.map(function(pokemon, key) {
      return (
        <TouchableHighlight 
          style={styles.pokemon}
          onPress={_this._onPressPokemon.bind(null, pokemon)} 
          key={key}
          underlayColor={'#eeeeee'}
        >
          <View style={styles.pokemonInfo}>
            <Text style={styles.pokemonInfoText}>{pokemon.name}</Text>
            <Text style={styles.pokemonInfoText}>{pokemon.number}</Text>
          </View>
        </TouchableHighlight>
      );
    });
  },

  _onPressPokemon: function(pokemon) {
    this.props.navigator.push({
      title: pokemon.name,
      component: PokemonInfo,
      passProps: {pokemonResourceURI: pokemon.resourceURI},
      backButtonTitle: '',
    });
  }
});

module.exports = Pokedex;

// TODO: use ListView instead
