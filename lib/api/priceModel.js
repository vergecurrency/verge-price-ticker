"use strict";
var mongoose = require("mongoose");
var currenciesSupported = require("./priceTable.json");
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
                    currenciesSupported.currencies.map(function (_a) {
                        var currency = _a.currency;
                        return currency;
                    })
                ]
            }
        ]
    }
});
module.exports = mongoose.model("Price", PriceSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcHJpY2VNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLElBQU0sbUJBQW1CLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDekQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUU3QixJQUFJLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQztJQUMzQixLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELFlBQVksRUFBRTtRQUNaLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsTUFBTSxFQUFFO1FBQ04sSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELGNBQWMsRUFBRTtRQUNkLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxnQkFBZ0IsRUFBRTtRQUNoQixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFO1lBQ0o7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osSUFBSSxFQUFFO29CQUNKLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ2hDLFVBQUMsRUFBa0M7NEJBQWhDLHNCQUFRO3dCQUE2QixPQUFBLFFBQVE7b0JBQVIsQ0FBUSxDQUNqRDtpQkFDRjthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMifQ==