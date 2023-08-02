import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { User } from 'src/user/user.model';
import { UserRoles } from 'src/user-roles/user-roles.model';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [
    RoleService
  ]
})
export class RoleModule {}
