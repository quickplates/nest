import { BadRequestException, HttpStatus } from "@nestjs/common";

/** Bad request exception with detailed errors. */
export class DetailedBadRequestException extends BadRequestException {
  constructor(errors: { [key: string]: string[] }) {
    super({
      errors,
      message: "Bad Request",
      statusCode: HttpStatus.BAD_REQUEST,
    });
  }
}
