// cria variável global para o prisma service, evitando a necessidade de importá-lo em cada módulo do projeto

import { Global, Module } from "@nestjs/common";
import { PrismaService } from "./prismaService";

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
