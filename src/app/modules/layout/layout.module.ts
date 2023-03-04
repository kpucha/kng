import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { SwitchComponent } from './components/switch/switch.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [ToolbarComponent, SwitchComponent, SidenavComponent, IconComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [ToolbarComponent, SidenavComponent],
})
export class LayoutModule {}
