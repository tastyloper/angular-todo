/* Core */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

/* Service */
import { TodosService } from 'src/app/core/service/todos.service';

/* Interface */
import { Todo } from '../../core/models/todo.interface';

/* Type */
import { NavItem } from '../../core/models/nav-item.type';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  content: string;
  navItems: NavItem[] = ['All', 'Active', 'Completed'];
  navState: NavItem = 'All';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todosService.getAll().subscribe(todos => this.todos = todos);
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo() {
    const content = this.content && this.content.trim();
    this.content = '';
    console.log(content);

    if (!content) { return; }
    this.todosService.add(this.generateId(), content).subscribe(todo => this.todos = todo);
  }

  removeTodo(todoId: number) {
    this.todosService.delete(todoId).subscribe(todo => this.todos = todo);
  }

  toggleTodo(todoId: number) {
    const completed = !this.todos.find(todo => todo.id === todoId).completed;
    this.todosService.toggle(todoId, completed).subscribe(todo => this.todos = todo);
  }

  toggleAllTodo(completed: boolean) {
    this.todosService.toggleAll(completed).subscribe(todo => this.todos = todo);
  }

  checkClear() {
    this.todosService.clear().subscribe(todo => this.todos = todo);
  }

  get CompletedTodosNum() {
    return this.todos ? this.todos.filter(todo => todo.completed).length : 0;
  }

  get ActiveTodosNum() {
    return this.todos ? this.todos.filter(todo => !todo.completed).length : 0;
  }

  get IsAllCheck() {
    return this.todos ? this.todos.length === this.todos.filter(todo => todo.completed).length : false;
  }
}
