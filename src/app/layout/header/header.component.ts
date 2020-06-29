import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  @Input() isCollapsed: boolean;
  @Output() trigger = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.trigger.emit(this.isCollapsed);
  }
}
