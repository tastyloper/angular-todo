import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosFilterPipe } from './pipe/todos-filter.pipe';

@NgModule({
  declarations: [
    TodosFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodosFilterPipe
  ]
})
export class SharedModule {}
