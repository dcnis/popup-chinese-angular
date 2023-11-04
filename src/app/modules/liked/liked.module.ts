import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LikedRoutingModule } from './liked-routing.module';
import { LikedPageComponent } from './components/liked-page/liked-page.component';


@NgModule({
  declarations: [
    LikedPageComponent
  ],
  imports: [
    CommonModule,
    LikedRoutingModule
  ]
})
export class LikedModule { }
