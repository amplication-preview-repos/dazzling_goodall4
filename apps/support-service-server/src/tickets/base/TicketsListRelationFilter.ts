/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TicketsWhereInput } from "./TicketsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TicketsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TicketsWhereInput,
  })
  @ValidateNested()
  @Type(() => TicketsWhereInput)
  @IsOptional()
  @Field(() => TicketsWhereInput, {
    nullable: true,
  })
  every?: TicketsWhereInput;

  @ApiProperty({
    required: false,
    type: () => TicketsWhereInput,
  })
  @ValidateNested()
  @Type(() => TicketsWhereInput)
  @IsOptional()
  @Field(() => TicketsWhereInput, {
    nullable: true,
  })
  some?: TicketsWhereInput;

  @ApiProperty({
    required: false,
    type: () => TicketsWhereInput,
  })
  @ValidateNested()
  @Type(() => TicketsWhereInput)
  @IsOptional()
  @Field(() => TicketsWhereInput, {
    nullable: true,
  })
  none?: TicketsWhereInput;
}
export { TicketsListRelationFilter as TicketsListRelationFilter };
