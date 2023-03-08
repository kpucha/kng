import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LayoutService } from './modules/layout/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSmall: boolean | undefined = undefined;
  isBig: boolean | undefined = undefined;

  constructor(public layout: LayoutService) {
    this.isSmall = layout.small;
    layout.isSmall.subscribe((s) => (this.isSmall = s));
    this.isBig = layout.big;
    layout.isBig.subscribe((b) => (this.isBig = b));
  }
}
