import PlusIcon from "@icon/PlusIcon.tsx";
import Loading from "@ui/Loading.tsx";
import { useEffect } from "react";

import TaskForm from "./TaskForm.tsx";
import TaskItem from "./TaskItem.tsx";
import TaskViewModel from "./TaskViewModel.ts";

const TasksView = () => {
    const {
        taskFormIsOpen,
        closeTaskForm,
        openTaskForm,
        tasks,
        getTasks,
        task,
        editTask,
        handleTaskChange,
        createTask,
        updateTask,
        formLoading,
        removeTask,
        toggleTasksStatus,
        updateEditTask,
        listLoading
    } = TaskViewModel();

    useEffect(() => {
        getTasks();
    }, [getTasks]);

    return (
        <>
            <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-gray-500">{tasks.length} things to do</p>

                <button
                    onClick={openTaskForm}
                    className="p-2 focus:outline-none flex items-center justify-center rounded-full drop-shadow-xl bg-blue-600 text-white"
                >
                    <PlusIcon className="h-6 w-6 p-0.5" />
                </button>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden">
                <div className="w-full h-full overflow-y-scroll bg-slate-100 border border-gray-200/50 py-3 px-2 space-y-5 hidesScrollbar">
                    {tasks.map((item, index) => (
                        <TaskItem
                            key={index}
                            item={item}
                            onClick={() => toggleTasksStatus(item.id)}
                            onEdit={() => updateEditTask(item)}
                            onRemove={() => removeTask(item.id)}
                        />
                    ))}
                </div>

                {listLoading && (
                    <div className="h-[500px] w-full absolute bg-black/30 top-0 right-0 flex items-center justify-center">
                        <Loading className="h-12 w-12 text-white" />
                    </div>
                )}
            </div>

            <TaskForm
                isOpen={taskFormIsOpen}
                value={task}
                onChange={handleTaskChange}
                onSubmit={() => {
                    if (editTask) {
                        updateTask();
                    } else {
                        createTask();
                    }
                }}
                task={editTask}
                loading={formLoading}
                closeModal={closeTaskForm}
            />
        </>
    );
};

export default TasksView;
