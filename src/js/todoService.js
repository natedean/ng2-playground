var TodoModel = (function () {
    function TodoModel(title) {
        if (title === void 0) { title = ''; }
        this.title = title;
        this.status = 'started';
    }
    return TodoModel;
})();
exports.TodoModel = TodoModel;
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new TodoModel('eat'),
            new TodoModel('sleep'),
            new TodoModel('code')
        ];
        this.errorMessage = '';
    }
    TodoService.prototype.addTodo = function (value) {
        this.todos.push(value);
    };
    TodoService.prototype.setErrorMessage = function (message) {
        this.errorMessage = message;
    };
    return TodoService;
})();
exports.TodoService = TodoService;
//# sourceMappingURL=todoService.js.map