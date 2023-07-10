import { plainToInstance } from "class-transformer";
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  validateSync,
} from "class-validator";

export class Config {
  @IsString()
  @IsNotEmpty()
  host: string;

  @IsNumber()
  @Min(1)
  @Max(65535)
  port: number;
}

export function load() {
  const config = {
    host: process.env.API_HOST || "0.0.0.0",
    port:
      process.env.API_PORT === undefined
        ? 3000
        : parseInt(process.env.API_PORT, 10),
  };

  const validatedConfig = plainToInstance(Config, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
