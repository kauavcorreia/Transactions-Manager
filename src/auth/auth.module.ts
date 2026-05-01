import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config'; // acessa as variáveis de ambiente do arquivo .env
@Module({

  imports: [UsersModule, JwtModule.registerAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      secret: configService.getOrThrow<string>('JWT_SECRET'), //lê a variável jwt_seccret
      signOptions: { expiresIn: '1h' },
      algorithms: 'HS256', //algoritmo de assinatura do token jwt
    }),
  }) 
],

  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}

