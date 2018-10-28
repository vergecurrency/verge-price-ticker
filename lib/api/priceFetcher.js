"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var Price = mongoose_1.default.model("Price");
var priceTable_json_1 = __importDefault(require("./priceTable.json"));
var logging_1 = require("../logging");
var priceUpdate = function (content) {
    return Price.updateOne({ currency: content.currency }, content, { upsert: true, setDefaultsOnInsert: true }, function (err) {
        if (err)
            logging_1.logger.error(err);
        else
            logging_1.logger.info("Updated currency (" + content.currency + ") successfully");
    });
};
var fetchAndUpdatePrices = function (currency) {
    node_fetch_1.default("https://api.coinpaprika.com/v1/ticker/xvg-verge")
        .then(function (res) { return res.ok && res.json(); })
        .then(function (_a) {
        var rank = _a.rank;
        node_fetch_1.default("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=XVG&tsyms=" + currency)
            .then(function (res) { return res.ok && res.json(); })
            .then(function (_a) {
            var _b = currency, currencyData = _a.RAW.XVG[_b], rest = __rest(_a, ["RAW"]);
            var newPrice = {
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
                currency: currency
            };
            priceUpdate(newPrice);
        });
    });
};
priceTable_json_1.default.currencies.forEach(function (_a) {
    var currency = _a.currency;
    logging_1.logger.info("Start fetching currency (" + currency + ")");
    fetchAndUpdatePrices(currency);
});
setInterval(function () {
    priceTable_json_1.default.currencies.forEach(function (_a) {
        var currency = _a.currency;
        logging_1.logger.info("Start fetching currency (" + currency + ")");
        fetchAndUpdatePrices(currency);
    });
}, 2.5 * 60 * 1000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VGZXRjaGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9wcmljZUZldGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzREFBZ0M7QUFDaEMsMERBQStCO0FBQy9CLElBQU0sS0FBSyxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLHNFQUEyQztBQUMzQyxzQ0FBb0M7QUFFcEMsSUFBTSxXQUFXLEdBQUcsVUFBQyxPQUE2QjtJQUNoRCxPQUFBLEtBQUssQ0FBQyxTQUFTLENBQ2IsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUM5QixPQUFPLEVBQ1AsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUMzQyxVQUFBLEdBQUc7UUFDRCxJQUFJLEdBQUc7WUFBRSxnQkFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7WUFDdEIsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXFCLE9BQU8sQ0FBQyxRQUFRLG1CQUFnQixDQUFDLENBQUM7SUFDMUUsQ0FBQyxDQUNGO0FBUkQsQ0FRQyxDQUFDO0FBRUosSUFBTSxvQkFBb0IsR0FBRyxVQUFDLFFBQWdCO0lBQzVDLG9CQUFLLENBQUMsaURBQWlELENBQUM7U0FDckQsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXBCLENBQW9CLENBQUM7U0FDakMsSUFBSSxDQUFDLFVBQUMsRUFBUTtZQUFOLGNBQUk7UUFDWCxvQkFBSyxDQUNILDJFQUF5RSxRQUFVLENBQ3BGO2FBQ0UsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQXBCLENBQW9CLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQUMsRUFBdUQ7WUFBdkMsSUFBQSxhQUFVLEVBQVYsNkJBQXdCLEVBQU0sMEJBQU87WUFDMUQsSUFBTSxRQUFRLEdBQUc7Z0JBQ2YsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO2dCQUN6QixJQUFJLEVBQUUsSUFBSTtnQkFDVixPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87Z0JBQzdCLE9BQU8sRUFBRSxZQUFZLENBQUMsT0FBTztnQkFDN0IsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO2dCQUMzQixVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7Z0JBQ25DLFVBQVUsRUFBRSxZQUFZLENBQUMsVUFBVTtnQkFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO2dCQUNqQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVk7Z0JBQ3ZDLGVBQWUsRUFBRSxZQUFZLENBQUMsZUFBZTtnQkFDN0MsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO2dCQUNqQyxZQUFZLEVBQUUsWUFBWSxDQUFDLFlBQVk7Z0JBQ3ZDLE1BQU0sRUFBRSxZQUFZLENBQUMsTUFBTTtnQkFDM0IsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO2dCQUMzQixjQUFjLEVBQUUsWUFBWSxDQUFDLGNBQWM7Z0JBQzNDLGdCQUFnQixFQUFFLFlBQVksQ0FBQyxnQkFBZ0I7Z0JBQy9DLFFBQVEsVUFBQTthQUNULENBQUM7WUFFRixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQUVGLHlCQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVk7UUFBVixzQkFBUTtJQUN2QyxnQkFBTSxDQUFDLElBQUksQ0FBQyw4QkFBNEIsUUFBUSxNQUFHLENBQUMsQ0FBQztJQUNyRCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqQyxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsQ0FBQztJQUNWLHlCQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVk7WUFBVixzQkFBUTtRQUN2QyxnQkFBTSxDQUFDLElBQUksQ0FBQyw4QkFBNEIsUUFBUSxNQUFHLENBQUMsQ0FBQztRQUNyRCxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDIn0=