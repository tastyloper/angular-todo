/* Core */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Interface */
import { Todo } from '../../interface/todo.interface';

/* Type */
import { NavItem } from '../../type/nav-item.type';

/* Environment */
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoContainerComponent implements OnInit {
  appUrl: string = environment.appUrl;
  todos: Todo[];
  navItems: NavItem[] = ['All', 'Active', 'Completed'];
  navState: NavItem = 'All';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get<Todo[]>(this.appUrl).subscribe(todos => this.todos = todos);
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo(input: HTMLInputElement) {
    if (!input.value.trim()) { return; }
    this.http.post<Todo[]>(this.appUrl, {
      id: this.generateId(),
      content: input.value,
      completed: false
    }).subscribe(todo => this.todos = todo);
    input.value = '';
  }

  removeTodo(todoId: number) {
    this.http.delete<Todo[]>(this.appUrl + todoId).subscribe(todo => this.todos = todo);
  }

  toggleTodo(todoId: number) {
    this.http.patch<Todo[]>(this.appUrl + todoId, {
      completed: !this.todos.find(todo => todo.id === todoId).completed
    }).subscribe(todo => this.todos = todo);
  }

  toggleAllTodo(completed: boolean) {
    this.http.patch<Todo[]>(this.appUrl, {
      completed
    }).subscribe(todo => this.todos = todo);
  }

  checkClear() {
    this.http.delete<Todo[]>(this.appUrl + 'completed').subscribe(todo => this.todos = todo);
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

  get IsAllCheck() {
    return this.todos.length === this.todos.filter(todo => todo.completed).length;
  }
}
