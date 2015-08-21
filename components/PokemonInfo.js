'use strict';

var React = require('react-native');
var mixin = require('baobab-react/mixins');
var PokemonInfoActions = require('../actions/PokemonInfoActions');
var PokemonInfoBio = require('./PokemonInfoBio');
var PokemonInfoMoves = require('./PokemonInfoMoves');
var PokemonInfoStats = require('./PokemonInfoStats');
var styles = require('../styles/pokemonInfoStyle');

var {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  ActivityIndicatorIOS,
  SegmentedControlIOS,
} = React;

var PokemonInfo = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    pokemonInfo: ['pokemonInfo', 'info'],
    isLoading: ['pokemonInfo', 'isLoading'],
    sprite: ['pokemonInfo', 'sprite'],
    selectedIndex: ['pokemonInfo', 'selectedIndex'],
    description: ['pokemonInfo', 'description']
  },

  componentDidMount: function() {
    PokemonInfoActions.getPokemonInfo(this.props.pokemonResourceURI);
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    if (!nextState.isLoading) return true;
    return false;
  },

  componentWillUnmount: function() {
    PokemonInfoActions.clean();
  },

  render: function() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicatorIOS size="large" />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <View>
          <SegmentedControlIOS 
            values={['Bio', 'Moves', 'Stats']}
            selectedIndex={this.state.selectedIndex} 
            onValueChange={this._onValueChange}
            tintColor={'red'}
          />
          {this._renderComponentOfValue()}
        </View>
      </ScrollView>
    );
  },

  _onValueChange: function(value) {
    var valueNum;

    if (value === 'Bio') valueNum = 0;
    else if (value === 'Moves') valueNum = 1;
    else valueNum = 2;

    PokemonInfoActions.onValueChange(valueNum);
  },

  _formatType: function(types) {
    if (types.length > 1) {
      return types[0].name + '/' + types[1].name;
    } else {
      return types[0].name;
    }
  },

  _renderComponentOfValue: function() {
    var component;

    if (this.state.selectedIndex === 0) {
      component = (
        <PokemonInfoBio 
          pokemonInfo={this.state.pokemonInfo} 
          sprite={this.state.sprite}
          description={this.state.description}
          name={this._formatType(this.state.pokemonInfo.types)}
        />
      );
    } else if (this.state.selectedIndex === 1) {
      component = (
        <PokemonInfoMoves moves={this.state.pokemonInfo.moves} />
      );
    } else {
      var pokemonStats = this.state.pokemonInfo;

      component = (
        <PokemonInfoStats
          pokemonStats={{
            pokemonID: pokemonStats.national_id,
            hp: pokemonStats.hp,
            attack: pokemonStats.attack,
            defense: pokemonStats.defense,
            exp: pokemonStats.exp,
            height: pokemonStats.height,
            weight: pokemonStats.weight,
            speed: pokemonStats.speed
          }}
        />
      );
    }

    return component;
  }
});

module.exports = PokemonInfo;
