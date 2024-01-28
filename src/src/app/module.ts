import { Module } from "@nestjs/common";
import { ConfigModule } from "./config/module";
import { RoutesModule } from "./routes/module";

/** Application module. */
@Module({
  imports: [RoutesModule, ConfigModule],
})
export class AppModule {}
