import type TaskRepository from "@repositoryInt/TaskRepository.ts";
import { inject, singleton } from "tsyringe";

@singleton()
class UpdateTask {
    #taskRepository: TaskRepository;

    constructor(@inject("TaskRepository") _taskRepository: TaskRepository) {
        this.#taskRepository = _taskRepository;
    }

    invoke(id: string, value: string) {
        return this.#taskRepository.updateTask(id, value);
    }
}

export default UpdateTask;
