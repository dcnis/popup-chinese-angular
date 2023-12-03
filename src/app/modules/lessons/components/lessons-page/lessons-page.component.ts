import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lessons-page',
  templateUrl: './lessons-page.component.html',
  styleUrls: ['./lessons-page.component.scss']
})
export class LessonsPageComponent implements OnInit {

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

  ngOnInit(): void {
    // get lessons from backend
    console.log('backend-url: ' + environment.apiUrl);
    console.log('Role: ' + process.env["CURRENT_ROLE"]);

  }

  
}
