'use strict';

var React = require('react-native');
var mixin = require('baobab-react/mixins');
var PokemonInfo = require('./PokemonInfo');
var PokedexActions = require('../actions/PokedexActions');
var MainActions = require('../actions/MainActions');
var styles = require('../styles/pokedexStyle');

var {
  ActivityIndicatorIOS,
  View,
  ScrollView,
  Text,
  TouchableHighlight,
  TextInput
} = React;

var Pokedex = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    pokemons: ['pokedex', 'pokemons'],
    pokemonQuery: ['pokedex', 'pokemonQuery'],
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
      <View style={styles.container}>
        <View style={styles.textInputWrapper}>
          <TextInput 
            style={styles.textInput}
            onChangeText={(text) => this._onChangeText(text)}
            placeholder={'Search for pokemons...'}
          />
        </View>
        <ScrollView automaticallyAdjustContentInsets={false}>
          {this._renderPokemons()}
        </ScrollView>
      </View>
    );
  },

  _renderPokemons: function() {
    var _this = this;
    var validPokemons = [];

    this.state.pokemons.map(function(pokemon, key) {
      var q = _this.state.pokemonQuery;

      if (!q || pokemon.nameQuery.indexOf(q) >= 0 || pokemon.number === q) {
        validPokemons.push(
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
      }
    });

    if (!validPokemons.length) return (
      <View style={styles.noResult}>
        <Text style={styles.noResultText}>No results</Text>
      </View>
    );

    return validPokemons;
  },

  _onPressPokemon: function(pokemon) {
    this.props.navigator.push({
      title: pokemon.name,
      component: PokemonInfo,
      passProps: {pokemonResourceURI: pokemon.resourceURI},
      backButtonTitle: '',
      leftButtonTitle: 'Back',
      onLeftButtonPress: () => this.props.navigator.pop()
    });
  },

  _onChangeColorBar: function(color) {
    MainActions.changeColorBar(color);
  },

  _onChangeText: function(query) {
    var trimmedQuery = query.trim();

    if (trimmedQuery || !trimmedQuery.length) {
      PokedexActions._onChangePokemonQuery(trimmedQuery);
    }
  }
});

module.exports = Pokedex;

// TODO: use ListView instead
