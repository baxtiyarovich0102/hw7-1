import { Injectable, BadRequestException } from '@nestjs/common';
import {v4 as uuid} from "uuid"

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

  addCourse(courseData: {title: string, desc: string, price: number, teacherName: string, isAcrive?: boolean}) {
    const course = {id: uuid(), ...courseData}
    this.courses.push(course)
    return course
  }

  updateCourse(id: string, courseData: {title: string, desc: string, price: number, teacherName: string, isAcrive?: boolean}) {
    let course = this.getCourseById(id)
    if (!course) {
      throw new BadRequestException('Course is not found');
    }
    course = Object.assign(course, courseData)
    return course
  }

  deleteCourse(id: string){
    const course = this.courses.findIndex(c => c.id === id)

    const deletedCourse = this.courses.splice(course, 1)
    return {message: " Course Deleted", course: deletedCourse[0]}
  }

}
