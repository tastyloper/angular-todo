/* Core */
import { Component, Input, Output, EventEmitter } from '@angular/core';

/* Interface */
import { Todo } from '../../core/models/todo.interface';

/* Type */
import { NavItem } from '../../core/models/nav-item.type';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Input() navState: NavItem;
  @Output() toogle = new EventEmitter();
  @Output() remove = new EventEmitter();
}
