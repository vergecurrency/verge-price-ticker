'use strict'

module.exports = function(app) {
  var priceController = require('./priceController')

  app.route('/api/v1/price/:currency').get(priceController.getPriceByCurrency)
}
