import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsAccountComponent } from './components/settings-account/settings-account.component';
import { SettingsInfoComponent } from './components/settings-info/settings-info.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';


@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsAccountComponent,
    SettingsInfoComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
