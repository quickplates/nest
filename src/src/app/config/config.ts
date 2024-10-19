import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  ValidateNested,
} from "class-validator";

/** Configuration for the server. */
export class ServerConfig {
  @IsString()
  @IsNotEmpty()
  host: string;

  @IsNumber()
  @Min(1)
  @Max(65535)
  port: number;
}

/** Configuration for the service. */
export class Config {
  @ValidateNested()
  server: ServerConfig;
}
