import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  @Output() add = new EventEmitter();
  content: string;

  addTodo() {
    this.add.emit(this.content);
    this.content = '';
  }
}
