var mongoose = require('mongoose')
const Price = mongoose.model('Price')

const sendError = (res, error) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(400)
  res.send({
    error,
  })
}

const sendJSON = (res, object) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(object))
}

exports.getPriceByCurrency = async (req, res) => {
  if (!req.params.currency) {
    sendError('you have to send a valid currency tag i.e. EUR')
  }

  try {
    const price = await Price.findOne({
      currency: req.params.currency.toUpperCase(),
    })
    const { _id, currency, ...rest } = price.toObject()
    sendJSON(res, rest)
  } catch (e) {
    sendError(
      res,
      "We weren't able to fetch your request, maybe check your currency input."
    )
  }
}
