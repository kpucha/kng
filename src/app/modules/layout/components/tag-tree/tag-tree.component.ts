import { FlatTreeControl } from '@angular/cdk/tree';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild,
} from '@angular/core';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { APP } from 'src/app/constants/app.constants';
import { Icon } from 'src/app/interfaces/icon.interface';
import { MenuSection } from 'src/app/interfaces/menu-section.interface';

@Component({
  selector: 'kng-tag-tree',
  templateUrl: './tag-tree.component.html',
  styleUrls: ['./tag-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagTreeComponent implements AfterViewInit {
  @ViewChild('tree') tree: any;

  public MENU: MenuSection[] = APP.MENU;
  private _transformer = (node: MenuSection, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.tag.desc,
      icon: node.tag.icon,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<MenuFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = this.MENU;
  }
  ngAfterViewInit(): void {
    //this.tree.treeControl.expandAll();
  }

  hasChild = (_: number, node: MenuFlatNode) => node.expandable;
}

/** Flat node with expandable and level information */
interface MenuFlatNode {
  expandable: boolean;
  name: string;
  icon: Icon;
  level: number;
}
