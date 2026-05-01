import { Controller, Post,Get, Body, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/registro.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

// controlador para lidar com as rotas de autenticação
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

@Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
  
// rota protegida para obter o perfil do usuário autenticado
  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Request() req) {
    return req.user;
  }





















}