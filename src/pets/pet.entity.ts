import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Pet {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => Int)
  ownerId: number;

  @Column({ nullable: true })
  @Field({ nullable: true })
  type?: string;

  @ManyToOne(() => Owner, (owner) => owner.pets)
  @Field((type) => Owner)
  owner: Owner;
}
