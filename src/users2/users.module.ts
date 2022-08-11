import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule, UsersService],
})
export class UsersModule {}



// import { CatsController } from './cats.controller';
// import { CatsService } from './cats.service';
// import { catsProviders } from './users.providers';
// import { DatabaseModule } from '../database/database.module';

// @Module({
//   imports: [DatabaseModule],
//   controllers: [Use],
//   providers: [
//     CatsService,
//     ...catsProviders,
//   ],
// })
// export class CatsModule {}