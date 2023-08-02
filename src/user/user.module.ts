import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from 'src/role/role.model';
import { UserRoles } from 'src/user-roles/user-roles.model';
import { RoleModule } from 'src/role/role.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RoleModule,
    forwardRef(() => AuthModule)
  ],
  exports: [
    UserService,
  ]
})
export class UserModule {}
