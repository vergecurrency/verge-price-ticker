"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var logging_1 = require("./logging");
// creation of models
require("./api/priceModel");
// creation of the price fetcher
require("./api/priceFetcher");
// starting of express
var app = express_1.default();
var PORT = process.env.PORT || 3000;
// mongo db client connection
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect("mongodb://localhost/prices", { useNewUrlParser: true });
// middleware to parse input
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
var routes = require("./api/routes");
routes(app);
/**
 * Handler for everything that didn't found any route
 */
app.use(function (req, res) {
    logging_1.logger.warn("Requested URL was not available: " + req.originalUrl);
    res.status(404).send({ url: req.originalUrl + " not found" });
});
// start server on Port XYZ
app.listen(PORT);
logging_1.logger.info("Pricelist RESTful API server started on port: " + PORT);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFnQztBQUNoQyw0REFBcUM7QUFDckMsb0RBQThCO0FBRTlCLHFDQUFtQztBQUVuQyxxQkFBcUI7QUFDckIsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDNUIsZ0NBQWdDO0FBQ2hDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzlCLHNCQUFzQjtBQUN0QixJQUFNLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDdEIsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO0FBRXRDLDZCQUE2QjtBQUM3QixrQkFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBQ2xDLGtCQUFRLENBQUMsT0FBTyxDQUNkLDRCQUE0QixFQUM1QixFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FDMUIsQ0FBQztBQUVGLDRCQUE0QjtBQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRVo7O0dBRUc7QUFDSCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVMsR0FBRyxFQUFFLEdBQUc7SUFDdkIsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsc0NBQW9DLEdBQUcsQ0FBQyxXQUFhLENBQUMsQ0FBQztJQUNuRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsV0FBVyxHQUFHLFlBQVksRUFBRSxDQUFDLENBQUM7QUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFFSCwyQkFBMkI7QUFDM0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqQixnQkFBTSxDQUFDLElBQUksQ0FBQyxtREFBaUQsSUFBTSxDQUFDLENBQUMifQ==