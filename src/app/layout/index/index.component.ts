import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
  isCollapsed = true;
  constructor() {}

  ngOnInit(): void {}
}
