import { Tag } from './tag.interface';

export interface MenuSection {
  tag: Tag;
  children?: MenuSection[];
}
