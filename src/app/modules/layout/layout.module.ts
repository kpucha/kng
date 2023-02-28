import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '../material/material.module';
import { SwitchComponent } from './components/switch/switch.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [ToolbarComponent, SwitchComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ToolbarComponent, SidenavComponent],
})
export class LayoutModule {}
