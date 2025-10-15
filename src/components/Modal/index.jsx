import { GrClose } from "react-icons/gr"

export const Modal = ({ content, handleClose }) => {
    return (
        <div className="fixed z-[100] top-0 left-0 right-0 bottom-0 bg-gray-500/90 flex items-center justify-center">
            <div className="absolute right-3 top-3 cursor-pointer" onClick={handleClose}><GrClose /></div>
            {content}
        </div>
    )
}