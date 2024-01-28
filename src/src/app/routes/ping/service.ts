import { Injectable } from "@nestjs/common";
import { PingResponse } from "./models";

/** Service for the ping endpoint. */
@Injectable()
export class PingRouteService {
  /** Do nothing. */
  async ping(): Promise<PingResponse> {
    return undefined;
  }
}
