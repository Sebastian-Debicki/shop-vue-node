import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  price: number;

  @Column({ type: 'varchar', length: 200 })
  description: string;
}
