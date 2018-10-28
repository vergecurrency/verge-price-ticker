var mongoose = require("mongoose");
const currenciesSupported = require("./priceTable.json");
var Schema = mongoose.Schema;

var PriceSchema = new Schema({
  price: {
    type: Number
  },
  rank: {
    type: Number
  },
  openday: {
    type: Number
  },
  highday: {
    type: Number
  },
  lowday: {
    type: Number
  },
  open24Hour: {
    type: Number
  },
  high24Hour: {
    type: Number
  },
  low24Hour: {
    type: Number
  },
  change24Hour: {
    type: Number
  },
  changepct24Hour: {
    type: Number
  },
  changeday: {
    type: Number
  },
  changepctday: {
    type: Number
  },
  supply: {
    type: Number
  },
  mktcap: {
    type: Number
  },
  totalvolume24H: {
    type: Number
  },
  totalvolume24Hto: {
    type: Number
  },
  currency: {
    type: [
      {
        type: String,
        enum: [
          currenciesSupported.currencies.map(
            ({ currency }: { currency: string }) => currency
          )
        ]
      }
    ]
  }
});

module.exports = mongoose.model("Price", PriceSchema);
