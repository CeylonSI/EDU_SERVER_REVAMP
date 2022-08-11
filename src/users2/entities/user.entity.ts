import { Column, Table, Model, BeforeCreate, BeforeUpdate, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

@Table
export class User extends Model {
  @Column
  name: string;
  @Column
  email: string;
  @Column
  password: string;

  // @HasMany(() => Student)
  // student: Student[];

  @BeforeCreate
  static async hashPassword(instance: User) {
    // this will also be called when an instance is created
    const salt = await bcrypt.genSalt();
    instance.password = await bcrypt.hash(instance.password, salt);
    console.log('await bcrypt.hash(instance.password, 10): ', instance.password);
  }
}
