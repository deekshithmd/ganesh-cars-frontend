import { useCarDataStore } from '../../store/useAppStore';

const SortCars = () => {
    // Select each piece of state individually for stability
    const sortOptions = useCarDataStore((state) => state.sortOptions);
    const selectedSort = useCarDataStore((state) => state.selectedSort);
    const setSortOption = useCarDataStore((state) => state.setSortOption);

    const handleSortChange = (e) => {
        if (setSortOption) { // Ensure setSortOption is available
            setSortOption(e.target.value);
        }
    };

    if (!sortOptions || sortOptions.length === 0) {
        return null; // Or a loading/default state
    }

    return (
        <div className="mb-4 sm:mb-0">
            <label htmlFor="sort-cars" className="sr-only">Sort cars by</label>
            <select
                id="sort-cars"
                value={selectedSort}
                onChange={handleSortChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
                {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SortCars;