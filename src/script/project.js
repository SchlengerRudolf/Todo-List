export class Project {
    title;
    description;
    id;
    todoList = [];
    
    
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.todoList = [];
        this.id = crypto.randomUUID();
    }

    get getTitle() { return this.title };
    set setTitle(name) { this.title = name };

    get getDescription() { return this.description };
    set setDescription(text) { this.description = text };

    get getId() { return this.id };

    get getTodoList() { return this.todoList };

    pushTodo(todo) { this.todoList.push(todo) };
    removeTodo(id) {
        let list = this.getTodoList;

        for (let i = 0; i < list.length; i++) {
            if (id === list[i].getId) {
                this.todoList.splice(i, 1);
                break;
            }
        }
    };
    
    getTodo(id) { 
        for (const todo of this.todoList) {
            if (todo.getId === id) return todo;
        };
    };
}