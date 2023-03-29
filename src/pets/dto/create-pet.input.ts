import { Field, InputType, Int } from '@nestjs/graphql';
import { IsAlpha, IsNumber } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string;

  @IsNumber()
  @Field((type) => Int)
  ownerId: number;
}
