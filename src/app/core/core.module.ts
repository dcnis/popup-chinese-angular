import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    RouterModule,
  ]
})
export class CoreModule { }
