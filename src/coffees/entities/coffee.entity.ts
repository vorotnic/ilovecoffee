import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //sql === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn() //increment value
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
