import { Component } from '@angular/core';
import { LayoutService } from 'src/app/modules/layout/services/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isSmall: boolean | undefined = undefined;
  isMed: boolean | undefined = undefined;
  isBig: boolean | undefined = undefined;

  constructor(public layout: LayoutService) {
    this.isSmall = layout.small;
    this.isMed = layout.med;
    this.isBig = layout.big;
    layout.isSmall.subscribe((s) => (this.isSmall = s));
    layout.isMed.subscribe((s) => (this.isMed = s));
    layout.isBig.subscribe((b) => (this.isBig = b));
  }

  getCardsSize() {
    if (this.isBig) return '33%';
    if (this.isMed) return '50%';
    if (this.isSmall) return '100%';
    return '33%';
  }
}
