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
var startsWith_1 = require('./startsWith');
var TodoList = (function () {
    function TodoList(todoService) {
        this.todoService = todoService;
    }
    TodoList = __decorate([
        angular2_1.Component({
            selector: 'todo-list',
            directives: [angular2_1.NgFor],
            pipes: [startsWith_1.StartsWith],
            template: "\n        <div>\n            <div *ng-for=\"#todo of todoService.todos | startsWith\">{{ todo.title }}</div>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todoService_1.TodoService])
    ], TodoList);
    return TodoList;
})();
exports.TodoList = TodoList;
//# sourceMappingURL=todoList.js.map