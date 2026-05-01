import { Injectable, UnauthorizedException, BadRequestException} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/registro.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UserResponseDto } from '../users/dto/user-response.dto';

// injecao de dependencias
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    // método para realizar o login do usuário
    async login(LoginDto: LoginDto): Promise<{ access_token: string; user: UserResponseDto }> {
        const { email, password } = LoginDto;

        // verifica se o usuario existe
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        // verifica se a senha é válida
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const payload = { sub: user.id, email: user.email };
        const access_token = this.jwtService.sign(payload);
        const { password: _, ...userWithoutPassword } = user;
    
        return{
            access_token,
            user: userWithoutPassword as UserResponseDto
            
        }
    }


    // método para registrar um novo usuário
    async register(RegisterDto: RegisterDto): Promise<{ access_token: string; user: UserResponseDto }> {
        const { name, email, password } = RegisterDto;

        // verifica se o email já está em uso
        const existingUser = await this.usersService.findByEmail(email);
        if (existingUser) {
            throw new BadRequestException('Email já está em uso');
        }
        
        // cria o usuário
        const user = await this.usersService.create({ name, email, password });
        const payload = { sub: user.id, email: user.email };
        const access_token = this.jwtService.sign(payload);
            
        return {       
            access_token,
            user: user as UserResponseDto
        };
    }

    // método para validar o token JWT e retornar as informações do usuário
    async validateToken(token: string): Promise<UserResponseDto> {

        const user = await this.usersService.findOne(token);
        if (!user){
            throw new UnauthorizedException('Usuário não encontrado');
        }
        const { password: _, ...userWithoutPassword } = user;
        return userWithoutPassword as UserResponseDto;
    }


}
