'use strict';

var StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20
  },

  stat: {
    padding: 10,
    flexDirection: 'row'
  },

  statTextLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  },

  statText: {
    fontSize: 20
  }
});
