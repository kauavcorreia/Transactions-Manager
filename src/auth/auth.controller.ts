import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

// controlador para lidar com as rotas de autenticação
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

@Post('login')
login(@Body()body){
    return this.authService.login(body.email, body.password);
}

@Post('register')
register(@Body()body){
    return this.authService.register(body);
}
}

