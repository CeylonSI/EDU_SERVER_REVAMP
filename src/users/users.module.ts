import { Module } from '@nestjs/common';
import { UsersController } from './Users.controller';
import { UsersService } from './Users.service';
import { UsersProviders } from './users.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    ...UsersProviders,
  ],
})
export class UsersModule {}