import { Component, Input } from '@angular/core';
import { Icon } from 'src/app/interfaces/icon.interface';
import {
  faQuestion,
  faServer,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

import {
  faGoogle,
  faAws,
  faMicrosoft,
  faPython,
  faJs,
  faJava,
  faHtml5,
  faCss3,
  faPhp,
  faAngular,
  faNodeJs,
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
      case 'codeBranch':
        return faCodeBranch;
      case 'codeBranch':
        return faCodeBranch;
      case 'python':
        return faPython;
      case 'js':
        return faJs;
      case 'java':
        return faJava;
      case 'html':
        return faHtml5;
      case 'css':
        return faCss3;
      case 'php':
        return faPhp;
      case 'angular':
        return faAngular;
      case 'express':
        return faNodeJs;
      case 'tensorflow':
        return faGoogle;
      case 'pytorch':
        return faPython;
      default:
        return faQuestion;
    }
  }
}
