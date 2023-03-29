import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownersServices: OwnersService,
  ) {}

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const pet = this.petsRepository.create(createPetInput);
    return this.petsRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    const pet = this.petsRepository.find();
    return pet;
  }

  async findOne(id: number): Promise<Pet> {
    const pet = this.petsRepository.findOneOrFail({ where: { id } });
    return pet;
  }

  async getOwner(ownerId: number): Promise<Owner> {
    console.log(ownerId);
    return this.ownersServices.findOne(ownerId);
  }
}
