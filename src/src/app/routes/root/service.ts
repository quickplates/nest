import { Injectable } from "@nestjs/common";

@Injectable()
export class RootRouteService {
  async get(): Promise<"bar"> {
    return "bar";
  }
}
