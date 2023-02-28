import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { PublicRoutingModule } from './public-routing.module';
import { GitgraphCvComponent } from './components/gitgraph-cv/gitgraph-cv.component';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AboutComponent, GitgraphCvComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    FontAwesomeModule,
  ],
  exports: [],
})
export class PublicModule {}
