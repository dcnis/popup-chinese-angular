import { Component } from '@angular/core';

@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons-page.component.html',
  styleUrls: ['./lessons-page.component.scss']
})
export class LessonsPageComponent {
  lessons: any[] = [
    {
      title: "First Lesson",
      level: "Absolute Beginner",
      imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title: "Second Lesson",
      level: "Absolute Beginner",
      imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
    {
      title: "Third Lesson",
      level: "Absolute Beginner",
      imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"
    },
  ]
}
