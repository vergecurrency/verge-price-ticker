import { Request, Response } from "express";
import fetch from "node-fetch";
import { sendError, sendJSON } from "./defaultController";

export const getIpDetails = async (req: Request, res: Response) => {
  try {
      fetch("http://api.ipstack.com/check?access_key=a9e03264eab585d224212a5edcac8fcf&format=1")
        .then(response => response.json())
        .then(json => {
            sendJSON(res, json);
        });
  } catch (e) {
    sendError(res, "Couldn't fetch IP data.");
  }
};
