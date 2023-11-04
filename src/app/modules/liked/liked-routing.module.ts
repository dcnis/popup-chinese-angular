import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikedPageComponent } from './components/liked-page/liked-page.component';

const routes: Routes = [
  {
    path: '',
    component: LikedPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikedRoutingModule { }
