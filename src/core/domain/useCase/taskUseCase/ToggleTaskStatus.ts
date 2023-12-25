import type TaskRepository from "@repositoryInt/TaskRepository.ts";
import { inject, singleton } from "tsyringe";

@singleton()
class ToggleTaskStatus {
    #taskRepository: TaskRepository;

    constructor(@inject("TaskRepository") _taskRepository: TaskRepository) {
        this.#taskRepository = _taskRepository;
    }

    invoke(id: string) {
        return this.#taskRepository.markAsRead(id);
    }
}

export default ToggleTaskStatus;
