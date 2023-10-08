import { Injectable } from '@nestjs/common';
import { StudentDto } from './dto/student.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private prisma: PrismaService){}
  
  findAll(estudianteId:string) {
    const id = estudianteId.split("-")
    const lastname = id[1]
    const firstname = id[0]
    return this.prisma.student.findMany({
      where: {
        firstname: firstname,
        lastname: lastname,
        subject:{
          isNot:null,
        }
      }
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} estudiante`;
  }

  update(id: number, estudianteDto: StudentDto) {
    return `This action updates a #${id} estudiante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estudiante`;
  }
}