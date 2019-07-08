/* Module */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';

/* Interface */
import { Todo } from '../models/todo.interface';

/* Environment */
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: CoreModule
})
export class TodosService {
  appUrl: string = environment.appUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Todo[]>(this.appUrl);
  }

  add(id: number, content: string) {
    return this.http.post<Todo[]>(this.appUrl, { id, content, completed: false });
  }

  delete(todoId: number) {
    return this.http.delete<Todo[]>(this.appUrl + todoId);
  }

  toggle(todoId: number, completed: boolean) {
    return this.http.patch<Todo[]>(this.appUrl + todoId, { completed });
  }

  toggleAll(completed: boolean) {
    return this.http.patch<Todo[]>(this.appUrl, { completed });
  }

  clear() {
    return this.http.delete<Todo[]>(this.appUrl + 'completed');
  }
}
