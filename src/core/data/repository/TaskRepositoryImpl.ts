import type TaskDataSource from "@dataSource/Task/TaskDataSource.ts";
import TaskRepository from "@repositoryInt/TaskRepository.ts";
import { inject, singleton } from "tsyringe";

@singleton()
class TaskRepositoryImpl implements TaskRepository {
    #dataSource: TaskDataSource;

    constructor(@inject("TaskDataSource") _dataSource: TaskDataSource) {
        this.#dataSource = _dataSource;
    }

    createTask(value: string) {
        return this.#dataSource.createTask(value);
    }

    updateTask(id: string, value: string) {
        return this.#dataSource.updateTask(id, value);
    }

    getTasks() {
        return this.#dataSource.getTasks();
    }

    markAsRead(id: string) {
        return this.#dataSource.markAsRead(id);
    }

    removeTask(id: string) {
        return this.#dataSource.removeTask(id);
    }
}

export default TaskRepositoryImpl;
