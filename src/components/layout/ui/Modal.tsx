import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";

type TModal = {
    isOpen: boolean;
    children: React.ReactNode;
}


const Modal = ({ isOpen, children }: TModal) => {
    return createPortal(
        <div className={cn("fixed inset-0 bg-gray-500/70 invisible z-[999] flex justify-center items-center", { visible: isOpen })}>
            <div className="bg-white w-full max-w-sm rounded-md p-5">
                {children}</div>
        </div>,
        document.getElementById("portal") as Element
    );
};

export default Modal;