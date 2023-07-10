import { ApiProperty } from "@nestjs/swagger";
import { Equals } from "class-validator";

export class GetResponseDTO {
  @Equals("bar")
  @ApiProperty({
    description: "Should be 'bar'.",
  })
  foo: "bar";
}
