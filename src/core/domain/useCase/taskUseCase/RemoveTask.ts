import type TaskRepository from "@repositoryInt/TaskRepository.ts";
import { inject, singleton } from "tsyringe";

@singleton()
class RemoveTask {
    #taskRepository: TaskRepository;

    constructor(@inject("TaskRepository") _taskRepository: TaskRepository) {
        this.#taskRepository = _taskRepository;
    }

    invoke(id: string) {
        return this.#taskRepository.removeTask(id);
    }
}

export default RemoveTask;
