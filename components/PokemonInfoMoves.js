var React = require('react-native');
var styles = require('../styles/pokemonInfoMovesStyle');

var {
  View,
  Text,
  TouchableHighlight
} = React;

var PokemonInfoMoves = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        {this._renderMoves()}
      </View>
    );
  },

  _renderMoves: function() {
    return this.props.moves.map(function(move, key) {
      var moveFormatted = move.name.split('-').join(' ');

      return (
        <Text style={styles.move} key={key}>{moveFormatted}</Text>
      );
    });
  }
});

module.exports = PokemonInfoMoves;
