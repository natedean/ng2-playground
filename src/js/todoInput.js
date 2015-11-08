var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var todoService_1 = require('./todoService');
var TodoInput = (function () {
    function TodoInput(todoService) {
        this.todoService = todoService;
        this.todoModel = new todoService_1.TodoModel();
        console.log(todoService);
    }
    TodoInput.prototype.onSubmit = function () {
        var _this = this;
        this.validateInput(this.todoModel.title);
        var matchingTodos = this.todoService.todos.filter(function (todo) { return todo.title === _this.todoModel.title; });
        console.log(matchingTodos.length);
        if (!matchingTodos.length) {
            this.todoService.addTodo(this.todoModel);
            this.todoModel = new todoService_1.TodoModel();
        }
        else {
            this.todoService.setErrorMessage('You cannot enter more than one of the same todos.');
        }
    };
    TodoInput.prototype.validateInput = function (val) {
        console.log('validating!', this.todoService.errorMessage);
        if (this.todoService.errorMessage !== '') {
            this.todoService.setErrorMessage('');
        }
    };
    TodoInput = __decorate([
        angular2_1.Component({
            selector: 'todo-input',
            directives: [angular2_1.FORM_DIRECTIVES],
            template: "\n        <form (ng-submit)=\"onSubmit()\">\n            <input type=\"text\" [(ng-model)]=\"todoModel.title\"/>\n            <span>{{ todoService.errorMessage }}</span>\n        </form>\n    "
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoInput);
    return TodoInput;
})();
exports.TodoInput = TodoInput;
//# sourceMappingURL=todoInput.js.map