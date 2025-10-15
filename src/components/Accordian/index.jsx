import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

export const Accordian = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, content } = props;

    return (
        <div className="w-full">
            <div className="w-full flex items-center justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h4 className="text-lg font-semibold text-gray-700">{title}</h4>
                {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
            </div>
            {isOpen && <div className="w-full mt-2">{content}</div>}
        </div>
    );
};
