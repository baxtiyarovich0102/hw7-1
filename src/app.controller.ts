import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("courses")
  getAllCourses(): object {
    return this.appService.getAllCourses();
  }

  @Get("courses/:id")
  getCourseById(
    @Param("id") id: string
  ): any {
    const course = this.appService.getCourseById(id)
    return course
  }

  @Post("courses")
  addCourse(@Body() courseData: any) {
    return this.appService.addCourse(courseData)
  }

  @Put("courses/:id")
  updateCourse(
    @Param("id") id:string,
    @Body() body: any
  ): any{
    const course = this.appService.updateCourse(id, body)
    return course
  }
}
