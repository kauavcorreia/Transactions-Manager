/// <reference types="node" />
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

console.log('DATABASE_URL:', process.env.DATABASE_URL);

// configuracao do prisma client para conectar ao banco de dados usando a url definida na variavel de ambiente DATABASE_URL
export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL,
  },
});