import { useState, useRef } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';

import { IoCaretDownSharp } from "react-icons/io5";

export const Dropdown = ({ label, options = [], defaultValue = '', onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownRef = useRef(null);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleSelect = (option) => {
        setSelectedOption(option.value);
        onChange({ target: { value: option.value } });
        setIsOpen(false);
    };

    const selectedLabel = options.find(opt => (opt.value === selectedOption) || (opt.value === defaultValue))?.label || 'Select';

    return (
        <div className="flex flex-col relative" ref={dropdownRef}>
            {label && (
                <label className="mb-1 text-sm font-medium">
                    {label}
                </label>
            )}
            <div
                className="border p-2 rounded cursor-pointer bg-white flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedLabel}</span>
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <IoCaretDownSharp />
                </span>
            </div>
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded shadow-lg max-h-[200px] overflow-y-auto z-50">
                    {options.map((option) => (
                        <div
                            key={option.value}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};