import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class AppService {

  private courses: {id: string, title: string, desc: string, price: number, teacherName: string, isAcrive?: boolean}[] = [
    {
      id: "1",
      title: "Birinchi",
      desc: "Xaaa",
      price: 100,
      teacherName: "Men"
    },
    {
      id: "2",
      title: "Ikkinchi",
      desc: "Xaaa",
      price: 100,
      teacherName: "Men"
    }
  ]

  getAllCourses(){
    return this.courses
  }

  getCourseById(id:string): any{
    return this.courses.filter((course) => course.id == id).length
    ? this.courses.filter((course) => course.id == id)[0]
    : null
  }

  

}
