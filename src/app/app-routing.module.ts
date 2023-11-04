import { NgModule, importProvidersFrom } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {
    path: 'dashboard',
    loadChildren: () => 
      import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'lessons',
    loadChildren: () => 
      import('./modules/lessons/lessons.module').then((m) => m.LessonsModule),
  },
  {
    path: 'liked',
    loadChildren: () => 
      import('./modules/liked/liked.module').then((m) => m.LikedModule),
  },
  {
    path: 'settings',
    loadChildren: () => 
      import('./modules/settings/settings.module').then((m) => m.SettingsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
