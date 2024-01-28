import { Module } from "@nestjs/common";
import { PingRouteController } from "./controller";
import { PingRouteService } from "./service";

/** Module for the ping endpoint. */
@Module({
  controllers: [PingRouteController],
  providers: [PingRouteService],
})
export class PingRouteModule {}
