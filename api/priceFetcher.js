var mongoose = require('mongoose')
const fetch = require('node-fetch')
const Price = mongoose.model('Price')
const priceTable = require('./priceTable.json')
const { logger } = require('../logging')

const priceUpdate = content =>
  Price.updateOne(
    { currency: content.currency },
    content,
    { upsert: true, setDefaultsOnInsert: true },
    err => {
      if (err) logger.error(err)
      else logger.info(`Updated currency (${content.currency}) successfully`)
    }
  )

const fetchAndUpdatePrices = currency => {
  fetch('https://api.coinpaprika.com/v1/ticker/xvg-verge')
    .then(res => res.ok && res.json())
    .then(({ rank }) => {
      fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XVG&tsyms=${currency}`
      )
        .then(res => res.ok && res.json())
        .then(({ RAW: { XVG: { [currency]: currencyData } }, ...rest }) => {
          const newPrice = {
            price: currencyData.PRICE,
            rank: rank,
            openday: currencyData.OPENDAY,
            highday: currencyData.HIGHDAY,
            lowday: currencyData.LOWDAY,
            open24Hour: currencyData.OPEN24HOUR,
            high24Hour: currencyData.HIGH24HOUR,
            low24Hour: currencyData.LOW24HOUR,
            change24Hour: currencyData.CHANGE24HOUR,
            changepct24Hour: currencyData.CHANGEPCT24HOUR,
            changeday: currencyData.CHANGEDAY,
            changepctday: currencyData.CHANGEPCTDAY,
            supply: currencyData.SUPPLY,
            mktcap: currencyData.MKTCAP,
            totalvolume24H: currencyData.TOTALVOLUME24H,
            totalvolume24Hto: currencyData.TOTALVOLUME24HTO,
            currency,
          }

          priceUpdate(newPrice)
        })
    })
}

priceTable.currencies.forEach(({ currency }) => {
  logger.info(`Start fetching currency (${currency})`)
  fetchAndUpdatePrices(currency)
})

setInterval(() => {
  priceTable.currencies.forEach(({ currency }) => {
    logger.info(`Start fetching currency (${currency})`)
    fetchAndUpdatePrices(currency)
  })
}, 2.5 * 60 * 1000)
