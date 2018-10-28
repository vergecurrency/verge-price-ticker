"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Price = mongoose.model("Price");
var defaultController_1 = require("./defaultController");
exports.getPriceByCurrency = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var price, _a, _id, currency, rest, e_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (!req.params.currency) {
                    defaultController_1.sendError(res, "you have to send a valid currency tag i.e. EUR");
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Price.findOne({
                        currency: req.params.currency.toUpperCase()
                    })];
            case 2:
                price = _b.sent();
                if (price) {
                    _a = price.toObject(), _id = _a._id, currency = _a.currency, rest = __rest(_a, ["_id", "currency"]);
                    defaultController_1.sendJSON(res, rest);
                }
                else {
                    sendErrorFindingCurrency(res);
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _b.sent();
                sendErrorFindingCurrency(res);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var sendErrorFindingCurrency = function (res) {
    defaultController_1.sendError(res, "We weren't able to fetch your request, maybe check your currency input.");
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9wcmljZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBZ0NBOztBQTlCQSxtQ0FBc0M7QUFDdEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0Qyx5REFBMEQ7QUFFMUQsT0FBTyxDQUFDLGtCQUFrQixHQUFHLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7O2dCQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7b0JBQ3hCLDZCQUFTLENBQUMsR0FBRyxFQUFFLGdEQUFnRCxDQUFDLENBQUM7aUJBQ2xFOzs7O2dCQUdlLHFCQUFNLEtBQUssQ0FBQyxPQUFPLENBQUM7d0JBQ2hDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7cUJBQzVDLENBQUMsRUFBQTs7Z0JBRkksS0FBSyxHQUFHLFNBRVo7Z0JBQ0YsSUFBSSxLQUFLLEVBQUU7b0JBQ0gsS0FBNkIsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUEzQyxHQUFHLFNBQUEsRUFBRSxRQUFRLGNBQUEsRUFBSyxJQUFJLGNBQXhCLG1CQUEwQixDQUFGLENBQXNCO29CQUNwRCw0QkFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDckI7cUJBQU07b0JBQ0wsd0JBQXdCLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQy9COzs7O2dCQUVELHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztLQUVqQyxDQUFDO0FBRUYsSUFBTSx3QkFBd0IsR0FBRyxVQUFDLEdBQWE7SUFDN0MsNkJBQVMsQ0FDUCxHQUFHLEVBQ0gseUVBQXlFLENBQzFFLENBQUM7QUFDSixDQUFDLENBQUMifQ==