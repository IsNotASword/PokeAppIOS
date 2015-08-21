var React = require('react-native');
var styles = require('../styles/pokemonInfoBioStyle');

var {
  StyleSheet,
  Text,
  View,
  Image
} = React;

var PokemonInfoBio = React.createClass({
  render: function() {
    var pokemon = this.props.pokemonInfo;

    return (
      <View style={styles.container}>
        <View style={styles.principal}>
          <Image 
            source={{uri: this.props.sprite}}
            style={styles.image}
            resizeMode={Image.resizeMode.contain}
          />
          <Text style={styles.name}>{pokemon.name}</Text>
          <View>
            <Text style={styles.description}>
              {this.props.description}
            </Text>
          </View>
        </View>
        <View style={styles.resumeStatsWrapper}>
          <View style={styles.resumeStats}>
            <View style={styles.stat}>
              <Text style={styles.statTextLabel}>Height: </Text>
              <Text style={styles.statText}>{pokemon.height / 10} m</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTextLabel}>Weight: </Text>
              <Text style={styles.statText}>{pokemon.weight / 10} kg</Text>
            </View>
          </View>
          <View style={styles.resumeStats}>
            <View style={styles.stat}>
              <Text style={styles.statTextLabel}>Type: </Text>
              <Text style={styles.statText}>{this.props.name}</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statTextLabel}>National ID: </Text>
              <Text style={styles.statText}>{pokemon.national_id}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
});

module.exports = PokemonInfoBio;