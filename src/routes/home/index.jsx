import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BUDGET_TABS, CARS, FUEL_TYPE_TABS, LOGOS, OWNERSHIP_TABS, TESTIMONIALS } from "../../constants";
import Car from "../../../public/innova.png";

import { Tabs } from "../../components/Tab";
import { useFetchCars } from "../../hooks/useFetchCars";


const Home = () => {
    const [selectedBudgetTab, setSelectedBudgetTab] = useState(BUDGET_TABS[0]);
    const [selectedOwnershipTab, setSelectedOwnershipTab] = useState(OWNERSHIP_TABS[0])
    const [selectedFuelTypeTab, setSelectedFuelTypeTab] = useState(FUEL_TYPE_TABS[0])

    const navigate = useNavigate();

    useFetchCars();

    const handleViewAllCarsClick = () => {
        navigate("/listing")
    }

    const getReviewContent = (review) => {
        if (review?.length > 90)
            return review.slice(0, 90) + "..."
        return review
    }

    return (
        <div className="w-full flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-start w-full">
                <div className="w-full relative flex items-start h-[70vh]">
                    <div className="flex flex-col gap-y-10 mt-10 mb-20">
                        <h3 className="text-5xl font-bold text-center">
                            Welcome to Ganesh Cars
                        </h3>
                        <p className="text-center flex flex-col items-start gap-y-2 text-7xl font-semibold">
                            <span>Drive your</span>
                            <span>Dream Car to</span>
                            <span>Home</span>
                        </p>
                        <button className="px-10 py-3 bg-blue-500 text-xl text-white hover:bg-blue-600 rounded-md w-fit cursor-pointer" onClick={handleViewAllCarsClick}>Explore Now</button>
                    </div>
                    <div className="h-full flex items-center justify-center">
                        <img src={Car} alt="image" className="h-full w-auto" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-4 items-center justify-center w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full p-3 rounded-2xl border border-gray-300 outline-indigo-400"
                    />
                    <div className="flex items-center gap-x-6">
                        {LOGOS.map((logo, index) => {
                            return (
                                <div className="px-2 py-1.5 rounded-lg bg-gray-300 cursor-pointer" key={index}>
                                    <img

                                        src={logo?.logo}
                                        alt="image"
                                        className="w-10 h-auto"
                                    />
                                </div>
                            );
                        })}
                        <button className="px-3 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer" onClick={handleViewAllCarsClick}>
                            View All Cars
                        </button>
                    </div>
                </div>
                <div className="w-full mt-4">
                    <h3 className="font-bold text-xl">Cars by Budget</h3>
                    <Tabs
                        tabs={BUDGET_TABS}
                        selectedTab={selectedBudgetTab}
                        handleTabChange={setSelectedBudgetTab}
                        tabContent={CARS.filter(
                            (car) =>
                                car?.price >= selectedBudgetTab?.min &&
                                car?.price <= selectedBudgetTab?.max
                        )}
                    />
                </div>
                <div className="w-full mt-4">
                    <h3 className="font-bold text-xl">Cars by Fuel Type</h3>
                    <Tabs
                        tabs={FUEL_TYPE_TABS}
                        selectedTab={selectedFuelTypeTab}
                        handleTabChange={setSelectedFuelTypeTab}
                        tabContent={CARS.filter(
                            (car) =>
                                car?.fuel_type === selectedFuelTypeTab?.value
                        )}
                    />
                </div>
                <div className="w-full mt-4">
                    <h3 className="font-bold text-xl">Cars by Ownership</h3>
                    <Tabs
                        tabs={OWNERSHIP_TABS}
                        selectedTab={selectedOwnershipTab}
                        handleTabChange={setSelectedOwnershipTab}
                        tabContent={CARS.filter(
                            (car) => car?.ownership === selectedOwnershipTab?.value
                        )}
                    />
                </div>
                <div className="w-full my-4">
                    <h3 className="font-bold text-xl">Customer Testimonials</h3>
                    <div className="flex items-center justify-stretch gap-x-2 py-2">
                        {
                            TESTIMONIALS.slice(0, 4).map((testimonial, index) => {
                                return (
                                    <div className="w-72 h-auto border border-gray-300 rounded-lg overflow-hidden flex flex-col items-start justify-start" key={index}>
                                        <img
                                            src={testimonial?.image}
                                            className="w-full h-48 object-cover"
                                            width={100}
                                            height={100}
                                            alt="Customer Image" />
                                        <div className="px-3 py-2">
                                            <p>{getReviewContent(testimonial?.review)}</p>
                                            <div className="text-sm font-semibold flex justify-between mt-2">
                                                <p className="flex flex-col items-start">
                                                    <span className="text-lg">
                                                        {testimonial?.name}
                                                    </span>
                                                    <span className="text-sm">
                                                        {testimonial?.location}
                                                    </span>
                                                </p>
                                                <span className="text-green-900">{testimonial?.rating}/5</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
