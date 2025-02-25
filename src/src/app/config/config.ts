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
  @IsNotEmpty()
  @IsString()
  host: string;

  @IsNumber()
  @Max(65535)
  @Min(1)
  port: number;
}

/** Configuration for the service. */
export class Config {
  @ValidateNested()
  server: ServerConfig;
}
