import { Todo } from "./todo.js";

export class Project {
    #title;
    #description;
    #todoList = [];
    
    constructor(title, description) {
        this.#title = title;
        this.#description = description;
        this.#todoList = [];
    }

    get getTitle() { return this.#title };
    set setTitle(name) { this.#title = name };

    get getDescription() { return this.#description };
    set setDescription(text) { this.#description = text };

    get getTodoList() { return this.#todoList };

    pushTodo(todo) { this.#todoList.push(todo) };
    removeTodo(id) {
        let list = this.getTodoList;

        for (let i = 0; i < list.length; i++) {
            if (id === list[i].getId) {
                this.#todoList.splice(i, 1);
                break;
            }
        }
    };
}