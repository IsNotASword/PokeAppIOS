'use strict';

var mainCursor = require('../stateTree').select('main');

module.exports = {
  changeColorBar: function(color) {
    mainCursor.set('colorBar', color);
  }
};
