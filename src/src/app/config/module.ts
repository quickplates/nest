import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";

import { ConfigBuilder } from "./builder";
import { ConfigService } from "./service";

/** Config module. */
@Module({
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      load: [ConfigBuilder.build],
    }),
  ],
  providers: [ConfigService],
})
export class ConfigModule {}
