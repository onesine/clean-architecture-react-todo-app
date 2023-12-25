import { Dialog, Transition } from "@headlessui/react";
import Task from "@model/Task.ts";
import Button from "@ui/Button.tsx";
import Input from "@ui/Input.tsx";
import { FormEvent, Fragment, useCallback } from "react";

interface Props {
    isOpen: boolean;
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
    task: Task | null;
    loading: boolean;
    closeModal: () => void;
}

const TaskForm = (props: Props) => {
    const { isOpen, value, closeModal, loading, onChange, task, onSubmit } = props;

    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            onSubmit();
        },
        [onSubmit]
    );

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <form onSubmit={handleSubmit}>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        {task ? "Modification" : "Record"}
                                    </Dialog.Title>

                                    <div className="mt-2">
                                        <Input
                                            placeholder="Please enter the task"
                                            value={value}
                                            onChange={e => onChange(e.target.value)}
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <Button type="submit" loading={loading}>
                                            {task ? "Update" : "Save"}
                                        </Button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default TaskForm;
