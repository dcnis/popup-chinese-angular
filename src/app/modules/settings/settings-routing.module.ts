import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsAccountComponent } from './components/settings-account/settings-account.component';
import { SettingsInfoComponent } from './components/settings-info/settings-info.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPageComponent
  },
  {
    path: 'account',
    component: SettingsAccountComponent
  },
  {
    path: 'info',
    component: SettingsInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
