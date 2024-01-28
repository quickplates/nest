import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { PingRouteModule } from "./ping/module";

/** Routes module. */
@Module({
  imports: [
    PingRouteModule,
    RouterModule.register([
      {
        path: "/ping",
        module: PingRouteModule,
      },
    ]),
  ],
})
export class RoutesModule {}
