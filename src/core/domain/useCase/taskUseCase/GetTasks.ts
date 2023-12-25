import type TaskRepository from "@repositoryInt/TaskRepository.ts";
import { inject, singleton } from "tsyringe";

@singleton()
class GetTasks {
    #taskRepository: TaskRepository;

    constructor(@inject("TaskRepository") _taskRepository: TaskRepository) {
        this.#taskRepository = _taskRepository;
    }

    invoke() {
        return this.#taskRepository.getTasks();
    }
}

export default GetTasks;
