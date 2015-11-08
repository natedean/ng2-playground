import { Component, FORM_DIRECTIVES } from 'angular2/angular2';
import { TodoService, TodoModel } from './todoService';

@Component({
    selector: 'todo-input',
    directives: [FORM_DIRECTIVES],
    template: `
        <form (ng-submit)="onSubmit()">
            <input type="text" [(ng-model)]="todoModel.title"/>
            <span>{{ todoService.errorMessage }}</span>
        </form>
    `
})
export class TodoInput{
    todoModel:TodoModel = new TodoModel();

    constructor(
        public todoService:TodoService
    ){
        console.log(todoService);
    }

    onSubmit(){
        this.validateInput(this.todoModel.title);

        var matchingTodos = this.todoService.todos.filter((todo)=> todo.title === this.todoModel.title );

        console.log(matchingTodos.length);

        if (!matchingTodos.length){
            this.todoService.addTodo(this.todoModel);
            this.todoModel = new TodoModel();
        }else{
            this.todoService.setErrorMessage('You cannot enter more than one of the same todos.');
        }
    }

    validateInput(val:string){

        console.log('validating!', this.todoService.errorMessage);

        if (this.todoService.errorMessage !== ''){
            this.todoService.setErrorMessage('');
        }
    }
}