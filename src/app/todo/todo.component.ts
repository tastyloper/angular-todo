import { Component } from '@angular/core';

import { Todo } from '../interface/todo.interface';
import { NavItem } from '../type/nav-item.type';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[];
  navItems: NavItem[] = ['All', 'Active', 'Completed'];
  navState: NavItem = 'All';

  constructor() {
    this.getTodos();
  }

  getTodos() {
    setTimeout(() => {
      this.todos = [
        { id: 1, content: 'HTML', completed: true },
        { id: 2, content: 'CSS', completed: true },
        { id: 3, content: 'JS', completed: false }
      ];
    }, 1000);
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo(elem) {
    if (!elem.value.trim()) { return; }
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
    if (elem.nodeName !== 'LI') { return; }

    [ ...elem.parentNode.children ].forEach(item => {
      item === elem ? item.classList.add('active') : item.classList.remove('active');
    });
    this.navState = elem.id;
  }

  get CompletedTodosNum() {
    return this.todos ? this.todos.filter(todo => todo.completed).length : 0;
  }

  get ActiveTodosNum() {
    return this.todos ? this.todos.filter(todo => !todo.completed).length : 0;
  }

  // get _todos(): Todo[] {
  //   return this.todos.filter(({ completed }) => {
  //     if (this.navState === 'Active') { return !completed; }
  //     if (this.navState === 'Completed') { return completed; }
  //     return true;
  //   });
  // }
}
