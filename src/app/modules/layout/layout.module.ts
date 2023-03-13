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
import { AuthModule } from '../auth/auth.module';
import { PublicModule } from '../public/public.module';
import { TagTreeComponent } from './components/tag-tree/tag-tree.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SwitchComponent,
    SidenavComponent,
    IconComponent,
    TagTreeComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
    RouterModule,
    TranslateModule,
    AuthModule,
    PublicModule,
  ],
  exports: [ToolbarComponent, SidenavComponent, IconComponent],
})
export class LayoutModule {}
