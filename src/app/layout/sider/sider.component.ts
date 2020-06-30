import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.less'],
})
export class SiderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  menuMap: { [name: string]: boolean } = {
    sub1: true,
    sub2: false,
    sub3: false,
  };
  constructor() {
    console.log('isCollapsed', this.isCollapsed);
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('isCollapsed', this.isCollapsed);
  }

  openHandler(value: string): void {
    for (const key in this.menuMap) {
      if (key !== value) {
        this.menuMap[key] = false;
      }
    }
  }
}
