import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsPageComponent } from './components/lessons-page/lessons-page.component';
import { LessonDetailComponent } from './components/lesson-detail/lesson-detail.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    LessonsPageComponent,
    LessonDetailComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class LessonsModule { }
