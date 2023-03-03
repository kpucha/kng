import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { PublicRoutingModule } from './public-routing.module';
import { GitgraphCvComponent } from './components/gitgraph-cv/gitgraph-cv.component';
import { MaterialModule } from '../material/material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutHeaderComponent } from './components/about-header/about-header.component';
import { AboutXpCardComponent } from './components/about-xp-card/about-xp-card.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AboutComponent,
    GitgraphCvComponent,
    AboutHeaderComponent,
    AboutXpCardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    NgxEchartsModule,
  ],
  exports: [],
})
export class PublicModule {}
