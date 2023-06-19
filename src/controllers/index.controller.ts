import { NextFunction, Request, Response } from "express";
import { IndexService, IIndexService } from "../services/index.service";

export interface IIndexController {
  index(req: Request, res: Response, next: NextFunction): void;
}

export class IndexController implements IIndexController {
  constructor(private indexService: IIndexService = new IndexService()) {}

  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const respond = this.indexService.serverRespond();
      res.status(201).send(respond);
    } catch (err) {
      next(err);
    }
  };
}
