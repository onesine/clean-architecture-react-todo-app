import Task from "@model/Task.ts";

interface TaskDataSource {
    getTasks: () => Promise<Task[]>;
    createTask: (value: string) => Promise<Task>;
    updateTask: (id: string, value: string) => Promise<Task>;
    markAsRead: (id: string) => Promise<Task>;
    removeTask: (id: string) => Promise<Task>;
}

export default TaskDataSource;
