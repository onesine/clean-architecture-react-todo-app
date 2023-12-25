import type TaskRepository from "@repositoryInt/TaskRepository.ts";
import { inject, singleton } from "tsyringe";

@singleton()
class CreateTasks {
    #taskRepository: TaskRepository;

    constructor(@inject("TaskRepository") _taskRepository: TaskRepository) {
        this.#taskRepository = _taskRepository;
    }

    invoke(value: string) {
        return this.#taskRepository.createTask(value);
    }
}

export default CreateTasks;
