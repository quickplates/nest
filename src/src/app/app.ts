import { Logger } from "@nestjs/common";
import { NestFastifyApplication } from "@nestjs/platform-fastify";
import { Config } from "./config/config";
import { ConfigService } from "./config/service";

/** Application wrapper. */
export class App {
  private readonly app: NestFastifyApplication;

  constructor(app: NestFastifyApplication) {
    this.app = app;
  }

  public async run(): Promise<void> {
    const configService = this.app.get(ConfigService<Config, true>);

    const host = configService.get("server.host", { infer: true });
    const port = configService.get("server.port", { infer: true });

    await this.app.listen(port, host);

    const logger = new Logger("App");
    logger.log(`Listening on ${await this.app.getUrl()}`);
  }
}
