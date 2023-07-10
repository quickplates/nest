import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import { load } from "./config";
import { ConfigService } from "./service";

@Module({
  providers: [ConfigService],
  imports: [
    NestConfigModule.forRoot({
      cache: true,
      load: [load],
    }),
  ],
})
export class ConfigModule {}
