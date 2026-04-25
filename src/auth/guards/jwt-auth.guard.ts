import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}


  async canActivate(context: ExecutionContext): Promise<boolean> {
    //constante para obter a requisição HTTP do contexto de execução
    const request = context.switchToHttp().getRequest();

    //constante para obter o cabeçalho de autorização da requisição
    const authHeader = request.headers.authorization;
    

    if (!authHeader) {
      return false;
    }
    // divide o header em tipo de requisição e token jwt
    const token = authHeader.split(' ')[1];

    // logica para verificar a validade do token jwt usando o serviço JwtService
    try {
      const payload = this.jwtService.verify(token);
      request.user = payload;

      return true;
    } catch (error) {
      return false;
    }
  }
}