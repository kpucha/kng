import { Link } from '../interfaces/link.interface';
import { MenuSection } from '../interfaces/menu-section.interface';
import { LINKS } from './link.constants';

export class APP {
  public static NAME: string = 'Kpucha.dev';
  public static ICON_LIBS = {
    MATERIAL: 'material',
    FONTAWESOME: 'fontawesome',
  };
  public static MENU: MenuSection[] = [
    {
      link: LINKS.DEV,
      children: [
        { link: LINKS.FRONT },
        { link: LINKS.BACK },
        { link: LINKS.DEVOPS },
        { link: LINKS.BBDD },
      ],
    },
    {
      link: LINKS.IA,
      children: [
        { link: LINKS.IA },
        { link: LINKS.IOT },
        { link: LINKS.CLOUD },
      ],
    },
    {
      link: LINKS.IOT,
    },
    {
      link: LINKS.CLOUD,
      children: [
        { link: LINKS.GCP },
        { link: LINKS.AWS },
        { link: LINKS.AZURE },
      ],
    },
  ];
}
