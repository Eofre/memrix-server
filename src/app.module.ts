import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.model';
import { RoleModule } from './role/role.module';
import { Role } from './role/role.model';
import { UserRoles } from './user-roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { EducationalBlockModule } from './educational-block/educational-block.module';
import { EducationalBlock } from './educational-block/educational-block.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, EducationalBlock],
      autoLoadModels: true
    }),
    UserModule,
    RoleModule,
    AuthModule,
    EducationalBlockModule,
  ],
})
export class AppModule {}
