import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column('decimal')
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  description: string;
}
