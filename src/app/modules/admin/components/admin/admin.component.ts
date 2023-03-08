import { Component, OnInit } from '@angular/core';
import { TAG } from 'src/app/constants/tag.constants';
import { Tag } from 'src/app/interfaces/tag.interface';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public tagList: Tag[] = [];
  ngOnInit(): void {
    this.tagList = TAG.LIST;
  }
}
