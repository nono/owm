// Generated by CoffeeScript 1.7.1
var americano;

americano = require('americano-cozy');

module.exports = {
  city: {
    byDate: function(doc) {
      return emit(Date.parse(doc.created), doc);
    }
  }
};
