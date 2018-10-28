"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var priceTable_json_1 = __importDefault(require("./priceTable.json"));
var PriceSchema = new mongoose_1.Schema({
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
                enum: [priceTable_json_1.default.currencies.map(function (_a) {
                        var currency = _a.currency;
                        return currency;
                    })]
            }
        ]
    }
});
module.exports = mongoose.model("Price", PriceSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnRNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvY2hhcnRNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFrQztBQUNsQyxzRUFBb0Q7QUFFcEQsSUFBSSxXQUFXLEdBQUcsSUFBSSxpQkFBTSxDQUFDO0lBQzNCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsVUFBVSxFQUFFO1FBQ1YsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELGVBQWUsRUFBRTtRQUNmLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsWUFBWSxFQUFFO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE1BQU0sRUFBRTtRQUNOLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsY0FBYyxFQUFFO1FBQ2QsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELGdCQUFnQixFQUFFO1FBQ2hCLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUU7WUFDSjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsQ0FBQyx5QkFBbUIsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBWTs0QkFBVixzQkFBUTt3QkFBTyxPQUFBLFFBQVE7b0JBQVIsQ0FBUSxDQUFDLENBQUM7YUFDdkU7U0FDRjtLQUNGO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyJ9