import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column({ nullable: true })
  promotion: string;

  @CreateDateColumn({ type: 'timestamp' })
  creationDate: Date;

  @Column({ type: 'varchar', length: 200 })
  description: string;

  @Column()
  userId: string;
}
