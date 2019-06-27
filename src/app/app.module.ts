/* Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* Pipe */
import { TodosFilterPipe } from './pipe/todos-filter.pipe';

/* Component */
import { AppComponent } from './app.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoNavComponent } from './components/todo-nav/todo-nav.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosFilterPipe,
    TodoContainerComponent,
    TodoFormComponent,
    TodoNavComponent,
    TodoListComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
