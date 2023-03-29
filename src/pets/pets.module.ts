import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnersModule } from 'src/owners/owners.module';
import { Pet } from './pet.entity';
import { PetsResolver } from './pets.resolver';
import { PetsService } from './pets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), OwnersModule],
  providers: [PetsResolver, PetsService],
})
export class PetsModule {}
