import { Injectable } from "@nestjs/common";
import { ConfigService as NestConfigService } from "@nestjs/config";

/** Config service. */
@Injectable()
export class ConfigService<
  K = { [key: string]: unknown },
  WasValidated extends boolean = false,
> extends NestConfigService<K, WasValidated> {}
