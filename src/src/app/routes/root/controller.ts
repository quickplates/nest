import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { GetResponseDTO } from "./models";
import { RootRouteService } from "./service";

@Controller()
export class RootRouteController {
  constructor(private readonly rootRouteService: RootRouteService) {}

  @Get()
  @ApiOkResponse({
    description: "OK",
    type: GetResponseDTO,
  })
  async get(): Promise<GetResponseDTO> {
    const foo = await this.rootRouteService.get();

    return { foo };
  }
}
