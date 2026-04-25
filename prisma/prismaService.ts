// reutiliza o prisma client para evitar conexões desnecessárias

import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable() // torna a classe injetável em outros lugares do projeto

// cria subclasse do PrismaClient para conectar ao banco de dados
export class PrismaService extends PrismaClient implements OnModuleInit {
  
    async onModuleInit() {
    await this.$connect();
  }
}
