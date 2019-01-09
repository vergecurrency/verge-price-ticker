import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";

import { logger } from "./logging";

// creation of models
require("./api/priceModel");
// creation of the price fetcher
require("./api/priceFetcher");
// starting of express
const app = express();
const PORT = process.env.PORT || 3000;

// mongo db client connection
mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost/prices",
  { useNewUrlParser: true }
);

// middleware to parse input
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./api/routes");
routes(app);

/**
 * Handler for everything that didn't found any route
 */
/*app.use(function(req, res) {
  logger.warn(`Requested URL was not available: ${req.originalUrl}`);
  res.status(404).send({ url: req.originalUrl + " not found" });
});*/

// start server on Port XYZ
app.listen(PORT);

logger.info(`Pricelist RESTful API server started on port: ${PORT}`);
