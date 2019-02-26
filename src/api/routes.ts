import { Express } from "express-serve-static-core";

module.exports = (app: Express) => {
  import("./priceController").then(priceController => {
    app.route("/api/v1/price/:currency").get(priceController.getPriceByCurrency);
    app.route("/api/v1/chart/(:from/:till)?").get(priceController.getPriceChart);
  }),

  import("./ipController").then(ipController => {
    app.route("/api/v1/ip").get(ipController.getIpDetails);
  })
};
