import { useCallback, useState } from "react";

const useModal = (open = false) => {
    const [isOpen, setIsOpen] = useState(open);

    return {
        isOpen,
        openModal: useCallback(() => setIsOpen(true), []),
        closeModal: useCallback(() => setIsOpen(false), [])
    };
};

export default useModal;
