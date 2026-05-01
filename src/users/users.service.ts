import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prismaService';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService { // classe de serviço para lidar com as operações relacionadas aos usuários
  constructor(private prisma: PrismaService) {}

  // método para criar um novo usuário
  async create(data:{ name: string; email: string; password: string }) {

    // hash da senha do usuário usando bcrypt 
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // criação do usuário no banco de dados usando o Prisma Client  
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    }
  }

  async findByEmail(email: string) {
    // busca de um usuário pelo email usando o Prisma Client
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    return user;
  } 

  async findAll(){
    // busca de todos os usuários usando o Prisma Client
    const users = await this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },

    })
    return users;
  }

  async findOne(id: string){
    // busca de um usuário pelo ID usando o Prisma Client 
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        password : true,
      },
    });
    return user;
  }

  async update(id: string, updateUserDto){
    // atualização de um usuário pelo ID usando o Prisma Client
    const user = await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  }

  async delete(id: string){
    // exclusão de um usuário pelo ID usando o Prisma Client
    await this.prisma.user.delete({
      where: { id },
    });
  }

}


