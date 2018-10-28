import { Response } from "express";

export const sendError = (res: Response, error: string) => {
  res.setHeader("Content-Type", "application/json");
  res.status(400);
  res.send({
    error
  });
};

export const sendJSON = (res: Response, object: any) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(object));
};
