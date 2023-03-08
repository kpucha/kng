import { Link } from '../interfaces/link.interface';
import { MenuSection } from '../interfaces/menu-section.interface';
import { LINKS } from './link.constants';
import { TAG } from './tag.constants';

export class APP {
  public static NAME: string = 'Kpucha.dev';
  public static ICON_LIBS = {
    MATERIAL: 'material',
    FONTAWESOME: 'fontawesome',
  };
  public static MENU: MenuSection[] = [
    {
      tag: {
        type: 'group',
        name: 'byBranch',
        desc: 'Por rama',
        icon: {
          name: 'signpost',
        },
      },
      children: [
        { tag: TAG.FRONT },
        { tag: TAG.BACK },
        { tag: TAG.DEVOPS },
        { tag: TAG.DDBB },
        { tag: TAG.AI },
        { tag: TAG.IOT },
        { tag: TAG.CLOUD },
      ],
    },
    {
      tag: {
        type: 'group',
        name: 'byFramework',
        desc: 'Por Framework',
        icon: { name: 'activity_zone' },
      },
      children: [
        { tag: TAG.ANGULAR },
        { tag: TAG.EXPRESS },
        { tag: TAG.SPRING },
        { tag: TAG.TENSORFLOW },
        { tag: TAG.PYTORCH },
      ],
    },
    {
      tag: {
        type: 'group',
        name: 'byLang',
        desc: 'Por lenguaje',
        icon: { name: 'frame_source' },
      },
      children: [
        { tag: TAG.TYPESCRIPT },
        { tag: TAG.JAVA },
        { tag: TAG.PYTHON },
        { tag: TAG.PHP },
        { tag: TAG.JAVASCRIPT },
        { tag: TAG.HTML },
        { tag: TAG.CSS },
        { tag: TAG.CLI },
      ],
    },
  ];
}
