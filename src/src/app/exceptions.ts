import { BadRequestException, HttpStatus } from "@nestjs/common";

export class DetailedBadRequestException extends BadRequestException {
  constructor(errors: Record<string, string[]>) {
    super({
      message: "Bad Request",
      statusCode: HttpStatus.BAD_REQUEST,
      errors,
    });
  }
}
