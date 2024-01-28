import { Controller, Get, Header, HttpCode, HttpStatus } from "@nestjs/common";
import { ApiNoContentResponse } from "@nestjs/swagger";
import { PingResponse } from "./models";
import { PingRouteService } from "./service";

/** Controller for the ping endpoint. */
@Controller()
export class PingRouteController {
  constructor(private readonly pingRouteService: PingRouteService) {}

  @Get()
  @Header("Cache-Control", "no-store")
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiNoContentResponse({
    description: "Do nothing.",
  })
  async ping(): Promise<PingResponse> {
    const response = await this.pingRouteService.ping();
    return response;
  }
}
