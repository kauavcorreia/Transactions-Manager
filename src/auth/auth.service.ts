import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


// injecao de dependencias
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async login(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        // verifica se o usuario existe
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // verifica se a senha é válida
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }
        // payload para codificar o token JWT, contendo o id e email do usuário
        const payload = { sub: user.id, email: user.email };
        return {
            access_token: this.jwtService.sign(payload),
        };

    }
      // método para registrar um novo usuário
  async register(data){
    const user = await this.usersService.create(data);
    return user;

  }
}

