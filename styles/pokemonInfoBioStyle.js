'use strict';

var StyleSheet = require('react-native').StyleSheet;

module.exports = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch'
  },

  principal: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 250,
    height: 200,
  },

  description: {
    fontSize: 20
  },

  name: {
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold'
  },

  resumeStatsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#dddddd'
  },

  resumeStats: {
    flexDirection: 'column',
  },

  stat: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },

  statTextLabel: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold'
  },

  statText: {
    fontSize: 18,
  }
});
