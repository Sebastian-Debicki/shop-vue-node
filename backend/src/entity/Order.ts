import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

import { Product } from './Product';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'date' })
  orderDate: Date;

  @Column()
  userId: string;

  @Column()
  deliveryType: string;

  @Column('decimal')
  deliveryCosts: number;

  @Column('decimal')
  totalPrice: number;

  @Column('jsonb')
  products: Product[];
}
