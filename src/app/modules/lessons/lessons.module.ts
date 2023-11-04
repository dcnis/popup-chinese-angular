import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsPageComponent } from './components/lessons-page/lessons-page.component';

@NgModule({
  declarations: [
    LessonsPageComponent
  ],
  imports: [
    CommonModule,
    LessonsRoutingModule
  ]
})
export class LessonsModule { }
