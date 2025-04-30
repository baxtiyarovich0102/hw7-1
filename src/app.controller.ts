import { Controller, Get, Param } from '@nestjs/common';
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
}
