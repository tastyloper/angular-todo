/* Core */
import { Component, Input, Output, EventEmitter } from '@angular/core';

/* Type */
import { NavItem } from '../../type/nav-item.type';

@Component({
  selector: 'app-todo-nav',
  templateUrl: './todo-nav.component.html',
  styleUrls: ['./todo-nav.component.css']
})
export class TodoNavComponent {
  @Input() navItems: NavItem[];
  @Input() navState: NavItem;
  @Output() chengeState = new EventEmitter();
}
