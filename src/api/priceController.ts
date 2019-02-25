import { Request, Response } from "express";
import fetch from "node-fetch";
import mongoose = require("mongoose");
const Price = mongoose.model("Price");
import { sendError, sendJSON } from "./defaultController";

export const getPriceByCurrency = async (req: Request, res: Response) => {
  if (!req.params.currency) {
    sendError(res, "you have to send a valid currency tag i.e. EUR");
  }

  try {
    const price = await Price.findOne({
      currency: req.params.currency.toUpperCase()
    });
    if (price) {
      const { _id, currency, ...rest } = price.toObject();
      sendJSON(res, rest);
    } else {
      sendErrorFindingCurrency(res);
    }
  } catch (e) {
    sendErrorFindingCurrency(res);
  }
};

const sendErrorFindingCurrency = (res: Response) => {
  sendError(
    res,
    "We weren't able to fetch your request, maybe check your currency input."
  );
};

export const getPriceChart = async (req: Request, res: Response) => {
  try {
    const filter = req.params.from ? `${req.params.from}/${req.params.till}` : ''
    
    fetch(`https://graphs2.coinmarketcap.com/currencies/verge/${filter}`)
      .then(response => response.json())
      .then(json => {
          sendJSON(res, json);
      });
  } catch (e) {
    sendError(res, "Couldn't fetch chart data.");
  }
};
