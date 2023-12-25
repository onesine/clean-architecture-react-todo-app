import CircleCheckIcon from "@icon/CircleCheckIcon.tsx";
import CircleIcon from "@icon/CircleIcon.tsx";
import PencilSquare from "@icon/PencilSquare.tsx";
import TrashIcon from "@icon/TrashIcon.tsx";
import { cn } from "@libs/style.ts";
import Task from "@model/Task";

interface Props {
    item: Task;
    onClick: () => void;
    onEdit: () => void;
    onRemove: () => void;
}

const TaskItem = (props: Props) => {
    const { item, onRemove, onClick, onEdit } = props;

    return (
        <div className="bg-white rounded-2xl py-3 px-5 flex items-center space-x-3 border border-gray-200/50 shadow-sm">
            <div className="flex items-center space-x-3 flex-1 cursor-pointer" onClick={onClick}>
                {item.isComplete ? (
                    <CircleCheckIcon className="h-7 w-7 text-gray-300" />
                ) : (
                    <CircleIcon className="h-7 w-7 text-gray-300" />
                )}

                <p
                    className={cn({
                        "flex-1 text-sm text-gray-500": true,
                        "line-through": item.isComplete
                    })}
                >
                    {item.title}
                </p>
            </div>

            <div className="flex items-center space-x-3">
                <button className="focus:outline-none" onClick={onRemove}>
                    <TrashIcon className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                </button>

                <button className="focus:outline-none" onClick={onEdit}>
                    <PencilSquare className="h-5 w-5 text-gray-600 hover:text-gray-800" />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
