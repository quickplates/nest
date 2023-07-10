import { Module } from "@nestjs/common";
import { RootRouteModule } from "./root/module";

@Module({
  imports: [RootRouteModule],
})
export class RoutesModule {}
