export class TodoModel{
    status:string = 'started';

    constructor(
        public title:string = ''
    ){}
}

export class TodoService{
    todos:TodoModel[] = [
        new TodoModel('eat'),
        new TodoModel('sleep'),
        new TodoModel('code')
    ];
    errorMessage:string = '';

    addTodo(value:TodoModel):void {
        this.todos.push(value);
    }

    setErrorMessage(message:string):void {
        this.errorMessage = message;
    }
}