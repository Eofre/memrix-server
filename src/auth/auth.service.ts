import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcryptjs";
import { User } from 'src/user/user.model';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) {}
   
    async login(userDto: UserDto) {
       const user = await this.validateUser(userDto);
       return this.generateToken(user);
    }

    async registration( userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException("Пользоваетль с таким email уже существует.", HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user)
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, id: user.id, roles: user.roles}
        return {
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: UserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new UnauthorizedException({message: "Неккоректный email или пароль."});
    }

}
