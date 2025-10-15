"use client";
import { create } from "zustand";


const sortOptionsList = [
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'recent', label: 'Recently Added' },      // Needs car.created_at
    { value: 'km_desc', label: 'KM Driven: High to Low' }, // Needs car.km_driven
    { value: 'km_asc', label: 'KM Driven: Low to High' },   // Needs car.km_driven
    { value: 'age_asc', label: 'Car Age: Old to New' },    // Needs car.make_year (year ascending)
    { value: 'age_desc', label: 'Car Age: New to Old' },   // Needs car.make_year (year descending)
];

const AVAILABLE_COLORS = ['White', 'Black', 'Silver', 'Red', 'Blue', 'Grey', 'Brown', 'Other']; // Predefined, as not in CARS data

const AVAILABLE_TRANSMISSIONS = ["Automatic", "Manual"];
const AVAILABLE_FUEL_TYPES = ["Petrol", "Diesel", "Electric", "CNG"];

const initialFilterState = {
    cars: [],
    budget: { min: 0, max: 10000000 }, // Max 1 crore
    selectedBrands: [],
    selectedTransmissions: [],
    kmDriven: { min: 0, max: 100000 },
    selectedFuelTypes: [],
    selectedBodyTypes: [],
    selectedOwnerships: [],
    selectedColors: [],
    selectedSeats: [],
    makeYear: { min: 1990, max: new Date().getFullYear() },
    selectedSort: 'default', // Initial sort option
    sortOptions: sortOptionsList,
};

const applyFilters = (cars, filters) => {
    // 1. Apply existing filters
    let carsToDisplay = cars.filter((car) => {
        if (car?.price < filters.budget.min || car?.price > filters.budget.max)
            return false;
        if (
            filters.selectedBrands.length > 0 &&
            !filters.selectedBrands.includes(car?.brand)
        )
            return false;
        if (
            filters.selectedTransmissions.length > 0 &&
            !filters.selectedTransmissions.includes(car?.transmission_type)
        )
            return false;
        if (
            car?.km_driven < filters.kmDriven.min ||
            car?.km_driven > filters.kmDriven.max
        )
            return false;
        if (
            filters.selectedFuelTypes.length > 0 &&
            !filters.selectedFuelTypes.includes(car?.fuel_type)
        )
            return false;
        if (
            filters.selectedBodyTypes.length > 0 &&
            !filters.selectedBodyTypes.includes(car?.body_type)
        )
            return false;
        if (
            filters.selectedOwnerships.length > 0 &&
            !filters.selectedOwnerships.includes(car?.ownership)
        )
            return false;
        // Color filter will not work as 'color' is not in CARS data. Added for UI completeness.
        // if (filters.selectedColors.length > 0 && !filters.selectedColors.includes(car.color)) return false;
        if (
            filters.selectedSeats.length > 0 &&
            !filters.selectedSeats.includes(car?.no_of_seats)
        )
            return false;
        if (car?.make_year < filters.makeYear.min || car?.make_year > filters.makeYear.max)
            return false;
        return true;
    });

    console.log('cars to disp', carsToDisplay)

    // 2. Apply sorting
    const comparator = getSortComparator(filters?.selectedSort);

    if (comparator) {
        // Sort a copy of the array to avoid mutating cached results or original arrays
        carsToDisplay = [...carsToDisplay].sort(comparator);
    }

    return carsToDisplay?.length > 0 ? carsToDisplay : cars;
};

const getSortComparator = (sortValue) => {
    switch (sortValue) {
        case 'price_asc': return (a, b) => a.price - b.price;
        case 'price_desc': return (a, b) => b.price - a.price;
        case 'recent': return (a, b) => new Date(b.created_at) - new Date(a.created_at);
        case 'km_desc': return (a, b) => b.km_driven - a.km_driven;
        case 'km_asc': return (a, b) => a.km_driven - b.km_driven;
        case 'age_asc': return (a, b) => a.make_year - b.make_year; // Older cars (smaller year) first
        case 'age_desc': return (a, b) => b.make_year - a.make_year; // Newer cars (larger year) first
        default:
            return null; // No sort or default
    }
};

export const useCarDataStore = create((set, get) => ({
    // --- State ---
    allCars: [],
    filteredCars: [],
    ...initialFilterState,
    availableBrands: [],
    availableTransmissions: AVAILABLE_TRANSMISSIONS,
    availableFuelTypes: AVAILABLE_FUEL_TYPES,
    availableBodyTypes: [],
    availableOwnerships: [],
    availableColors: AVAILABLE_COLORS,
    availableSeats: [],
    initialMakeYearRange: { min: 1900, max: new Date().getFullYear() },

    // --- Internal action to update filtered cars ---
    _updateFilteredCars: () => {
        const {
            allCars,
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
            selectedSort,
        } = get();

        const activeFilters = {
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
            selectedSort,
        };
        set({ filteredCars: applyFilters(allCars, activeFilters) });
    },

    // --- Filter Actions ---
    setBudget: (min, max) => {
        set({
            budget: {
                min: parseInt(min, 10) || 0,
                max: parseInt(max, 10) || 10000000,
            },
        });
        get()._updateFilteredCars();
    },
    toggleBrand: (brand) => {
        set((state) => ({
            selectedBrands: state.selectedBrands.includes(brand)
                ? state.selectedBrands.filter((b) => b !== brand)
                : [...state.selectedBrands, brand],
        }));
        get()._updateFilteredCars();
    },
    toggleTransmission: (transmission) => {
        set((state) => ({
            selectedTransmissions: state.selectedTransmissions.includes(transmission)
                ? state.selectedTransmissions.filter((t) => t !== transmission)
                : [...state.selectedTransmissions, transmission],
        }));
        get()._updateFilteredCars();
    },
    setKmDriven: (min, max) => {
        set({
            kmDriven: {
                min: parseInt(min, 10) || 0,
                max: parseInt(max, 10) || 100000,
            },
        });
        get()._updateFilteredCars();
    },
    toggleFuelType: (fuelType) => {
        set((state) => ({
            selectedFuelTypes: state.selectedFuelTypes.includes(fuelType)
                ? state.selectedFuelTypes.filter((ft) => ft !== fuelType)
                : [...state.selectedFuelTypes, fuelType],
        }));
        get()._updateFilteredCars();
    },
    toggleBodyType: (bodyType) => {
        set((state) => ({
            selectedBodyTypes: state.selectedBodyTypes.includes(bodyType)
                ? state.selectedBodyTypes.filter((bt) => bt !== bodyType)
                : [...state.selectedBodyTypes, bodyType],
        }));
        get()._updateFilteredCars();
    },
    toggleOwnership: (ownership) => {
        set((state) => ({
            selectedOwnerships: state.selectedOwnerships.includes(ownership)
                ? state.selectedOwnerships.filter((o) => o !== ownership)
                : [...state.selectedOwnerships, ownership],
        }));
        get()._updateFilteredCars();
    },
    toggleColor: (color) => {
        set((state) => ({
            selectedColors: state.selectedColors.includes(color)
                ? state.selectedColors.filter((c) => c !== color)
                : [...state.selectedColors, color],
        }));
        get()._updateFilteredCars(); // Note: This filter won't have an effect without 'color' in car data
    },
    toggleSeat: (seat) => {
        set((state) => ({
            selectedSeats: state.selectedSeats.includes(seat)
                ? state.selectedSeats.filter((s) => s !== seat)
                : [...state.selectedSeats, seat],
        }));
        get()._updateFilteredCars();
    },
    setMakeYear: (min, max) => { // Assuming single slider controls max year
        set({ makeYear: { min: parseInt(min, 10) || 0, max: parseInt(max, 10) || 0 } });
        get()._updateFilteredCars();
    },

    clearFilters: () => {
        set(initialFilterState);
        get()._updateFilteredCars();
    },

    // For sorting
    setSortOption: (sortValue) => {
        set({ selectedSort: sortValue });
        get()._updateFilteredCars();
    },

    setAllCars: (cars) => {
        const allMakeYears = cars?.length > 0 ? cars?.map(car => car?.make_year) : [new Date().getFullYear() - 10];
        const minMakeYear = cars?.length > 0 ? Math.min(...allMakeYears) : new Date().getFullYear() - 10;
        const maxMakeYear = cars?.length > 0 ? Math.max(...allMakeYears) : new Date().getFullYear();
        const availableBrands = [...new Set(cars?.map((car) => car?.brand))].sort();
        const availableBodyTypes = [...new Set(cars?.map(car => car?.body_type))].sort();
        const availableOwnerships = [...new Set(cars?.map(car => car?.ownership))].sort((a, b) => a - b)
        const availableSeats = [...new Set(cars?.map(car => car?.no_of_seats))].sort((a, b) => a - b)?.filter(seat => !!seat);
        set({ allCars: cars, filteredCars: cars, initialMakeYearRange: { min: minMakeYear, max: maxMakeYear }, availableBrands, availableBodyTypes, availableOwnerships, availableSeats });
        get()._updateFilteredCars();
    },
}));
