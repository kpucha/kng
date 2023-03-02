import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrls: ['./about-header.component.scss'],
})
export class AboutHeaderComponent {
  faCoffee = faCoffee;
  constructor() {}
}
