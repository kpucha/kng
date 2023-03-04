import { Link } from './link.interface';

export interface MenuSection {
  link: Link;
  children?: MenuSection[];
}
