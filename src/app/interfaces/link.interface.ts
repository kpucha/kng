import { Icon } from './icon.interface';

export interface Link {
  url: string;
  name: string;
  icon: Icon;
  newWindow?: boolean;
}
