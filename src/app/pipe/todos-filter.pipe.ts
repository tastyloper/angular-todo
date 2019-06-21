import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interface/todo.interface';
import { NavItem } from '../type/nav-item.type';

@Pipe({
  name: 'todosFilter'
  // pure: false /* 비순수 파이프 - 참조가 변경되던 변경되지 않던 필터가 실행됨 */
})
export class TodosFilterPipe implements PipeTransform { // Pipe는 참조가 변경되야 필터가 실행된다.
  transform(todos: Todo[], navState: NavItem): Todo[] { // Pipe의 대상을 변형한다.
    return todos.filter(({ completed }) => {
      if (navState === 'Active') { return !completed; }
      if (navState === 'Completed') { return completed; }
      return true;
    });
  }
}
