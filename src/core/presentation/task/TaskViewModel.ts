import "reflect-metadata";
import useModal from "@hooks/useModal.ts";
import AppContainer from "@ioc/index.ts";
import Task from "@model/Task.ts";
import {
    GetTasks,
    CreateTasks,
    UpdateTask,
    ToggleTaskStatus,
    RemoveTask
} from "@useCase/taskUseCase";
import { useCallback, useState } from "react";

const TaskViewModel = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState("");
    const [editTask, setEditTask] = useState<Task | null>(null);
    const [listLoading, setListLoading] = useState(false);
    const [formLoading, setFormLoading] = useState(false);

    const getTasksUseCase = AppContainer.resolve(GetTasks);
    const createTasksUseCase = AppContainer.resolve(CreateTasks);
    const updateTaskUseCase = AppContainer.resolve(UpdateTask);
    const toggleTaskStatusUseCase = AppContainer.resolve(ToggleTaskStatus);
    const removeTaskUseCase = AppContainer.resolve(RemoveTask);

    const handleCloseModal = useCallback(() => {
        if (!formLoading) {
            task.length && setTask("");
            closeModal();
            editTask && setEditTask(null);
        }
    }, [closeModal, editTask, formLoading, task.length]);

    const getTasks = useCallback(() => {
        setListLoading(true);
        getTasksUseCase
            .invoke()
            .then(result => {
                setTasks(result);
            })
            .finally(() => setListLoading(false));
    }, [getTasksUseCase]);

    const createTask = useCallback(() => {
        setFormLoading(true);
        createTasksUseCase
            .invoke(task)
            .then(() => {
                getTasks();
                handleCloseModal();
            })
            .finally(() => setFormLoading(false));
    }, [createTasksUseCase, getTasks, handleCloseModal, task]);

    const updateTask = useCallback(() => {
        if (editTask) {
            setFormLoading(true);
            updateTaskUseCase
                .invoke(editTask.id, task)
                .then(() => {
                    getTasks();
                    handleCloseModal();
                })
                .finally(() => setFormLoading(false));
        }
    }, [editTask, getTasks, handleCloseModal, task, updateTaskUseCase]);

    const toggleTasksStatus = useCallback(
        (id: string) => {
            toggleTaskStatusUseCase.invoke(id).then(() => {
                getTasks();
            });
        },
        [getTasks, toggleTaskStatusUseCase]
    );

    const removeTask = useCallback(
        (id: string) => {
            removeTaskUseCase.invoke(id).then(() => {
                getTasks();
            });
        },
        [getTasks, removeTaskUseCase]
    );

    const handleTaskChange = useCallback((value: string) => {
        setTask(value);
    }, []);

    const updateEditTask = useCallback(
        (editTask: Task) => {
            openModal();
            setEditTask(editTask);
            setTask(editTask.title);
        },
        [openModal]
    );

    return {
        taskFormIsOpen: isOpen,
        closeTaskForm: handleCloseModal,
        openTaskForm: openModal,
        tasks,
        editTask,
        task,
        listLoading,
        formLoading,
        getTasks,
        updateTask,
        createTask,
        toggleTasksStatus,
        removeTask,
        handleTaskChange,
        updateEditTask
    };
};

export default TaskViewModel;
