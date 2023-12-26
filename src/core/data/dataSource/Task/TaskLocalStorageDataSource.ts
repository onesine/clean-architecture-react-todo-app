import TaskDataSource from "@dataSource/Task/TaskDataSource.ts";
import Task from "@model/Task.ts";
import { singleton } from "tsyringe";

@singleton()
class TaskLocalStorageDataSource implements TaskDataSource {
    #STORAGE_KEY = "tasks";

    getTasks() {
        return new Promise<Task[]>(resolve => {
            setTimeout(() => {
                resolve(this.getItems());
            }, 3000);
        });
    }

    createTask(value: string) {
        return new Promise<Task>(resolve => {
            setTimeout(() => {
                const tasks = this.getItems();
                const newTask = {
                    id: Date.now().toString(),
                    title: value,
                    isComplete: false
                };

                this.setItems([newTask, ...tasks]);

                resolve(newTask);
            }, 3000);
        });
    }

    updateTask(id: string, value: string) {
        return new Promise<Task>((resolve, reject) => {
            setTimeout(() => {
                const task = this.getItem(id);

                if (task) {
                    task.title = value;

                    this.setItems(
                        this.getItems().map(item => {
                            return item.id === task.id ? task : item;
                        })
                    );

                    resolve(task);
                } else {
                    reject("Task not found");
                }
            }, 3000);
        });
    }

    markAsRead(id: string) {
        return new Promise<Task>((resolve, reject) => {
            // setTimeout(() => {
            const task = this.getItem(id);

            if (task) {
                task.isComplete = !task.isComplete;
                this.setItems(
                    this.getItems().map(item => {
                        return item.id === task.id ? task : item;
                    })
                );
                resolve(task);
            } else {
                reject("Task not found");
            }
            // }, 3000);
        });
    }

    removeTask(id: string) {
        return new Promise<Task>((resolve, reject) => {
            // setTimeout(() => {
            const task = this.getItem(id);

            if (!task) {
                reject("Task not found");
            } else {
                this.setItems(this.getItems().filter(item => item.id !== id));
                resolve(task);
            }
            // }, 3000);
        });
    }

    getItems() {
        const raw = localStorage.getItem(this.#STORAGE_KEY);
        return raw === null ? [] : (JSON.parse(raw) as Task[]);
    }

    setItems(items: Task[]) {
        localStorage.setItem(this.#STORAGE_KEY, JSON.stringify(items));
    }

    getItem(id: string) {
        return this.getItems().find(item => item.id === id);
    }
}

export default TaskLocalStorageDataSource;
