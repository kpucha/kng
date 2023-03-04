import { Component } from '@angular/core';
import { Link } from 'src/app/interfaces/link.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor() {}
  public menus: Link[] = [
    // {
    //   name: 'DeV',
    //   url: '/dev',
    //   icon: 'frame_source',
    // },
    // {
    //   name: 'IA',
    //   url: '/ia',
    //   icon: 'neurology',
    // },
    // {
    //   name: 'IoT',
    //   url: '/iot',
    //   icon: 'home_iot_device',
    // },
    // {
    //   name: 'Cloud',
    //   url: '/cloud',
    //   icon: 'filter_drama',
    // },
  ];
  links = ['Dev', 'AI', 'IoT'];
  activeLink = this.links[0];
}
