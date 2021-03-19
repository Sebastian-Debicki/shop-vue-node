import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column({ length: 30 })
  password: string;

  @Column({ length: 30 })
  confirmPassword: string;

  @Column({ nullable: true })
  photo: string;
}
