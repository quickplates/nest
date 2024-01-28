import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { ConfigBuilder } from "./builder";
import { ConfigService } from "./service";

/** Config module. */
@Module({
  providers: [ConfigService],
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      load: [ConfigBuilder.build],
    }),
  ],
})
export class ConfigModule {}
