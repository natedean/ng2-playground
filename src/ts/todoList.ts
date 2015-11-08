import {Component, NgFor } from 'angular2/angular2';
import { TodoService } from './todoService';
import { StartsWith } from './startsWith';

@Component({
    selector: 'todo-list',
    directives: [NgFor],
    pipes: [StartsWith],
    template:`
        <div>
            <div *ng-for="#todo of todoService.todos | startsWith">{{ todo.title }}</div>
        </div>
    `
})
export class TodoList{
    constructor(
        public todoService:TodoService
    ){

    }
}