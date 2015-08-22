'use strict';

var React = require('react-native');
var mixin = require('baobab-react/mixins');
var tree = require('./stateTree');
var Pokedex = require('./components/Pokedex');
var MainActions = require('./actions/MainActions');
var styles = require('./styles/mainStyle');

var {
  NavigatorIOS,
  AppRegistry,
  StatusBarIOS
} = React;

var PokeApp = React.createClass({
  mixins: [mixin.branch],

  cursors: {
    colorBar: ['main', 'colorBar']
  },

  render: function() {
    StatusBarIOS.setStyle('light-content');

    return (
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title: 'All Pokemons',
          component: Pokedex
        }}
        barTintColor={this.state.colorBar}
        tintColor={'white'}
        titleTextColor={'white'}
        translucent={true}
      />
    );
  }
});

var PokeAppWrapper = React.createClass({
  mixins: [mixin.root],

  render: function() {
    return <PokeApp />;
  }
});

var PokeAppWrapperWrapper = React.createClass({
  render: function() {
    return <PokeAppWrapper tree={tree} />;
  }
});

AppRegistry.registerComponent('Pokeapp', () => PokeAppWrapperWrapper);
