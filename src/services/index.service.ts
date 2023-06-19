export interface IIndexService {
  serverRespond(): string;
}

export class IndexService implements IIndexService {
  public serverRespond(): string {
    console.log("Index Service");

    return "Server : Index Respond";
  }
}
