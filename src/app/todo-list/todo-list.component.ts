import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();
}
