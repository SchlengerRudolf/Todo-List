export class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #completionStatus;
    #id;

    constructor(title, dueDate, priority, description) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
        this.#id = crypto.randomUUID();
        this.#completionStatus = false;
    }

    get getTitle() { return this.#title };
    set setTitle(name) { this.#title = name };

    get getDescription() { return this.#description };
    set setDescription(text) { this.#description = text };

    get getDueDate() { return this.#dueDate };
    set setDueDate(date) { this.#dueDate = date };

    get getPriority() { return this.#priority };
    set setPriority(number) { this.#priority = number };

    get getCompletionStatus() { return this.#completionStatus };
    toggleCompletionStatus() { this.#completionStatus = this.#completionStatus === false ? true : false };

    get getId() { return this.#id };
}