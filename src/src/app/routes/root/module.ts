import { Module } from "@nestjs/common";
import { RootRouteController } from "./controller";
import { RootRouteService } from "./service";

@Module({
  controllers: [RootRouteController],
  providers: [RootRouteService],
})
export class RootRouteModule {}
