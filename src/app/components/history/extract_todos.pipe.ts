import { Pipe, PipeTransform } from '@angular/core';
import {Todo, TodoState} from '../../+todos';
import {AppState} from '../../store';

@Pipe({name: 'extractTodos'})
export class ExtractTodosPipe implements PipeTransform {
  transform(state: AppState): ReadonlyArray<Todo> {
      const todoState: TodoState = state['todos'];
      return Object.values(todoState.entities);
  }
}
