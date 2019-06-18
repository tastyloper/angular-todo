import { Component, ViewEncapsulation } from '@angular/core';
import { Todo } from './interface/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ];
  // completedTodos = this.todos.filter(val => val.completed).length;
  // activeTodos = this.todos.filter(val => !val.completed).length;

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo(elem: HTMLInputElement) {
    if (!elem.value.trim()) return;
    this.todos = [{ id: this.generateId(), content: elem.value, completed: false }, ...this.todos];
    elem.value = '';
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }

  toggleAllTodo(completed: boolean) {
    this.todos = this.todos.map(todo => ({ ...todo, completed}));
  }

  checkClear() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }
}
