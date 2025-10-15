
import { useCarDataStore } from "../../store/useAppStore"; // Adjust path as needed
import { getPriceInLocalString } from '../../utils';

const CarFilters = () => {
    const {
        budget,
        selectedBrands,
        selectedTransmissions,
        kmDriven,
        selectedFuelTypes,
        selectedBodyTypes,
        selectedOwnerships,
        selectedColors,
        selectedSeats,
        makeYear,
        availableBrands,
        availableTransmissions,
        availableFuelTypes,
        availableBodyTypes,
        availableOwnerships,
        availableColors,
        availableSeats,
        initialMakeYearRange,
        setBudget,
        toggleBrand,
        toggleTransmission,
        setKmDriven,
        toggleFuelType,
        toggleBodyType,
        toggleOwnership,
        toggleColor,
        toggleSeat,
        setMakeYear,
        clearFilters,
    } = useCarDataStore();

    const handleBudgetChange = (e) => {
        const { name, value: rawValue } = e.target;
        const newMaxValue = parseInt(rawValue, 10);

        // Assuming min budget is always 0 or your predefined store minimum
        // For this setup, we'll use 0 as the fixed minimum.
        // The store's initialFilterState.budget.min could also be used if it's not always 0.
        if (name === 'maxBudget') {
            setBudget(0, newMaxValue);
        }
    };

    const handleKmDrivenChange = (e) => {
        const { name, value: rawValue } = e.target;
        const newMaxValue = parseInt(rawValue, 10);

        // Assuming min kmDriven is always 0 or your predefined store minimum
        if (name === 'maxKm') {
            setKmDriven(0, newMaxValue);
        }
    };

    const handleMakeYearChange = (e) => {
        const { name, value: rawValue } = e.target;
        const newMaxValue = parseInt(rawValue, 10);

        if (name === 'maxMakeYear') {
            setMakeYear(initialMakeYearRange.min, newMaxValue); // Min year is fixed from initial range
        }
    };


    return (
        <div className="border border-gray-300 p-5 w-full mr-5 h-auto rounded-md">
            <h3 className="text-xl font-semibold mb-4">Filters</h3>

            {/* Budget Filter */}
            <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Budget (₹)</h4>
                <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>Min: {getPriceInLocalString(budget?.min)}</span>
                        <span>Max: {getPriceInLocalString(budget?.max)}</span>
                    </div>
                    <input
                        type="range"
                        id="maxBudget"
                        name="maxBudget"
                        value={budget.max}
                        onChange={handleBudgetChange}
                        min="0"
                        max="10000000"
                        step="50000"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>
            </div>
            <hr className="my-4" />

            {/* Brand Filter */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Brand</h4>
                {availableBrands?.map((brand) => (
                    <div key={brand} className="flex items-center mb-1">
                        <input type="checkbox" id={`brand-${brand}`} checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`brand-${brand}`} className="ml-2 text-sm text-gray-700">{brand}</label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {/* Transmission Filter */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Transmission</h4>
                {availableTransmissions.map((transmission) => (
                    <div key={transmission} className="flex items-center mb-1">
                        <input type="checkbox" id={`transmission-${transmission}`} checked={selectedTransmissions.includes(transmission)} onChange={() => toggleTransmission(transmission)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`transmission-${transmission}`} className="ml-2 text-sm text-gray-700">{transmission}</label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {/* Kilometer Driven Filter */}
            <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Kilometers Driven</h4>
                <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span className="text-xs text-gray-500">(0)</span>
                        <span>Max: {Number(kmDriven.max).toLocaleString('en-IN')} km</span>
                        <span className="text-xs text-gray-500">(100k)</span>
                    </div>
                    <input type="range" id="maxKm" name="maxKm" value={kmDriven.max} onChange={handleKmDrivenChange} min="0" max="100000" step="1000" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                </div>
            </div>
            <hr className="my-4" />

            {/* Fuel Type Filter */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Fuel Types</h4>
                {availableFuelTypes.map((fuelType) => (
                    <div key={fuelType} className="flex items-center mb-1">
                        <input type="checkbox" id={`fuel-${fuelType}`} checked={selectedFuelTypes.includes(fuelType)} onChange={() => toggleFuelType(fuelType)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`fuel-${fuelType}`} className="ml-2 text-sm text-gray-700">{fuelType}</label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />
            {/* Body Type Filter */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Body Type</h4>
                {availableBodyTypes.map((bodyType) => (
                    <div key={bodyType} className="flex items-center mb-1">
                        <input type="checkbox" id={`bodyType-${bodyType}`} checked={selectedBodyTypes.includes(bodyType)} onChange={() => toggleBodyType(bodyType)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`bodyType-${bodyType}`} className="ml-2 text-sm text-gray-700 capitalize">{bodyType.replace(/_/g, ' ')}</label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {/* Ownership Filter */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Ownership</h4>
                {availableOwnerships.map((ownerVal) => (
                    <div key={ownerVal} className="flex items-center mb-1">
                        <input type="checkbox" id={`ownership-${ownerVal}`} checked={selectedOwnerships.includes(ownerVal)} onChange={() => toggleOwnership(ownerVal)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`ownership-${ownerVal}`} className="ml-2 text-sm text-gray-700">
                            {ownerVal === 1 ? 'First Owner' : ownerVal === 2 ? 'Second Owner' : `${ownerVal}rd+ Owner`}
                        </label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {/* Color Filter (Note: Data for 'color' is not in CARS.js) */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Color</h4>
                {availableColors.map((color) => (
                    <div key={color} className="flex items-center mb-1">
                        <input type="checkbox" id={`color-${color}`} checked={selectedColors.includes(color)} onChange={() => toggleColor(color)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`color-${color}`} className="ml-2 text-sm text-gray-700">{color}</label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />

            {/* Seats Filter */}
            <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Seats</h4>
                {availableSeats.map((seatCount) => (
                    <div key={seatCount} className="flex items-center mb-1">
                        <input type="checkbox" id={`seat-${seatCount}`} checked={selectedSeats.includes(seatCount)} onChange={() => toggleSeat(seatCount)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                        <label htmlFor={`seat-${seatCount}`} className="ml-2 text-sm text-gray-700">{seatCount} Seats</label>
                    </div>
                ))}
            </div>
            <hr className="my-4" />
            {/* Make Year Filter */}
            <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">Make Year</h4>
                <div className="mb-3">
                    <div className="flex justify-between text-sm text-gray-700 mb-1">
                        <span>Min: {makeYear.min}</span>
                        <span className="text-xs text-gray-500">({initialMakeYearRange?.min})</span>
                        <span>Max: {makeYear.max}</span>
                        <span className="text-xs text-gray-500">({initialMakeYearRange?.max})</span>
                    </div>
                    <input type="range" id="maxMakeYear" name="maxMakeYear" value={makeYear.max} onChange={handleMakeYearChange} min={initialMakeYearRange?.min} max={initialMakeYearRange?.max} step="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                </div>
            </div>
            <hr className="my-4" />
            <button
                onClick={clearFilters}
                className="mt-5 py-2.5 px-4 bg-red-500 text-white border-none rounded-md cursor-pointer w-full hover:bg-red-600 transition-colors text-sm font-medium"
            >
                Clear All Filters
            </button>
        </div>
    );
};

export default CarFilters;