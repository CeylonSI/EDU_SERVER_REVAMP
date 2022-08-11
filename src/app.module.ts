import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesGuard } from './auth/roles/roles.guard';
import { ThrottlerModule } from '@nestjs/throttler';
// import { StudentsModule } from './students2/students.module';
import { SequelizeModule } from '@nestjs/sequelize';

// env file path
const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true, // for importing ths module in other folders (globally imported to all modules)
    }),
    // SequelizeModule.forRoot({
    //   dialect: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '1234',
    //   database: 'EDU_DB',
    //   autoLoadModels: true,
    //   synchronize: true,
    // }),
    ThrottlerModule.forRoot({
      //  brute-force attacks is rate-limiting
      ttl: 60,
      limit: 10,
    }),
    AuthModule,
    UsersModule,
    // StudentsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   // provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
