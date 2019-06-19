import { Component } from '@angular/core';
import { Todo } from '../interface/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: true },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ];
  navState = 'all';

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo(elem) {
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

  filter(elem) {
    if (elem.nodeName !== 'LI') return;

    [ ...elem.parentNode.children ].forEach(item => {
      if (item === elem) item.classList.add('active');
      else item.classList.remove('active');
    });
    this.navState = elem.id;
  }

  get CompletedTodosNum() {
    return this.todos.filter(todo => todo.completed).length;
  }

  get ActiveTodosNum() {
    return this.todos.filter(todo => !todo.completed).length;
  }

  get _todos(): Todo[] {
    return this.todos.filter(({ completed }) => {
      if (this.navState === 'active') return !completed;
      if (this.navState === 'completed') return completed;
      return true;
    });
  }
}
