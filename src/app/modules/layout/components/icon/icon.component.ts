import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/interfaces/icon.interface';
import { faQuestion, faServer } from '@fortawesome/free-solid-svg-icons';

import {
  faGoogle,
  faAws,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'kng-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon!: Icon;
  public isFA(icon: Icon): boolean {
    return icon.lib == 'fontawesome';
  }
  getIconByName(name: string): IconProp {
    switch (name) {
      case 'google':
        return faGoogle;
      case 'aws':
        return faAws;
      case 'microsoft':
        return faMicrosoft;
      case 'back':
        return faServer;
      default:
        return faQuestion;
    }
  }
}
