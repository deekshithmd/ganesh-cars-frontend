export const ImageInput = ({ label, id, onImageChange, shouldAllowMultiple = false }) => {
    return (
        <div className="flex flex-col mb-4">
            <input
                id={id}
                type="file"
                accept="image/*"
                onChange={onImageChange}
                className="sr-only"
                multiple={shouldAllowMultiple}
            />
            <label
                htmlFor={id}
                className="w-fit inline-flex items-center px-2 py-1 mt-1 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
            >
                {label}
            </label>
        </div>
    );
};