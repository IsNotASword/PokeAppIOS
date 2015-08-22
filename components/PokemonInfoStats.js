'use strict';

var React = require('react-native');
var styles = require('../styles/pokemonInfoStatsStyle');

var {
  StyleSheet,
  View,
  Text
} = React;

var PokemonInfoStats = React.createClass({
  render: function() {
    var pokemonStats = this.props.pokemonStats;

    return (
      <View style={styles.container}>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>National ID: </Text>
          <Text style={styles.statText}>{pokemonStats.pokemonID}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>HP: </Text>
          <Text style={styles.statText}>{pokemonStats.hp}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>Attack: </Text>
          <Text style={styles.statText}>{pokemonStats.attack}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>Defense: </Text>
          <Text style={styles.statText}>{pokemonStats.defense}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>Speed: </Text>
          <Text style={styles.statText}>{pokemonStats.speed}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>Exp: </Text>
          <Text style={styles.statText}>{pokemonStats.exp}</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>Height: </Text>
          <Text style={styles.statText}>{pokemonStats.height / 10} m</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statTextLabel}>Weight: </Text>
          <Text style={styles.statText}>{pokemonStats.weight / 10} kg</Text>
        </View>
      </View>
    );
  },
});

module.exports = PokemonInfoStats;
