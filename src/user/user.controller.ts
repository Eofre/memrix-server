import { Controller, Post, Body, Get, UseGuards, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() userDto: CreateUserDto) {
        return this.userService.createUser(userDto)
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers()
    }

    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post("/role")
    addRole(@Body() dto: AddRoleDto) {
        return this.userService.addRole(dto)
    }
}
