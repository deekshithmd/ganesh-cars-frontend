import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { useParams } from "react-router-dom";

import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";

import { Accordian } from "../../components/Accordian";
import { FeatureList } from "../../components/FeatureList";
import { OverviewItem } from "../../components/OverviewItem";
import { SpecificationList } from "../../components/SpecificationList";
import { getNumberInLocalString, getNumberInStringFormat, getOrdinalNumber, getTitleCase } from "../../utils";

import { getCarById } from "../../api";

const CarDetails = () => {
    const [carDetails, setCarDetails] = useState({});
    const [imageList, setImageList] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const { id } = useParams();

    console.log('details', carDetails)

    useEffect(() => {
        if (id) {
            getCarDetails(id)
        }
    }, [id])

    const getCarDetails = async (id) => {
        try {
            const carData = await getCarById(id)
            setCarDetails(carData)
            setImageList([
                carData?.thumbnail
            ]);
        }
        catch (e) {
            console.log('Error while getting car details', e);
        }

    }

    // Helper function to get liked car IDs from localStorage
    const getLikedCarsFromStorage = () => {
        const likedCarList = localStorage.getItem("liked_cars");
        return likedCarList ? JSON.parse(likedCarList) : [];
    };

    // Helper function to save liked car IDs to localStorage
    const saveLikedCarsToStorage = (likedCarIds) => {
        localStorage.setItem("liked_cars", JSON.stringify(likedCarIds));
    };

    useEffect(() => {
        const likedCarIds = getLikedCarsFromStorage();
        if (likedCarIds.includes(carDetails?.id)) {
            setIsLiked(true);
        }
    }, [carDetails?.id]);

    const handleLikeToggle = () => {
        const likedCarIds = getLikedCarsFromStorage();
        let updatedLikedCarIds;
        if (likedCarIds.includes(carDetails?.id)) {
            updatedLikedCarIds = likedCarIds.filter((id) => id !== carDetails?.id);
            setIsLiked(false);
        } else {
            updatedLikedCarIds = [...likedCarIds, carDetails?.id];
            setIsLiked(true);
        }
        saveLikedCarsToStorage(updatedLikedCarIds);
    };

    const handleNextClick = () => {
        if (imageIndex === imageList.length - 1) return;
        setImageIndex(imageIndex + 1);
    };

    const handlePrevClick = () => {
        if (imageIndex === 0) return;
        setImageIndex(imageIndex - 1);
    };

    return (
        <div className="w-full h-auto grid grid-cols-10 gap-2 py-4">
            <div className="col-span-6 grid gap-6">
                <div className="w-full h-100 rounded-lg relative overflow-hidden">
                    {imageIndex > 0 && (
                        <div
                            className="absolute top-[46%] left-2 cursor-pointer h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center"
                            onClick={handlePrevClick}
                        >
                            <FiChevronLeft size={32} />
                        </div>
                    )}
                    <img
                        src={`${imageList[imageIndex]}`}
                        alt={carDetails?.name}
                        className="w-full h-full object-cover"
                    />
                    {imageIndex < imageList.length - 1 && (
                        <div
                            className="absolute top-[46%] right-2 cursor-pointer  h-8 w-8 bg-blue-300 rounded-full flex items-center justify-center"
                            onClick={handleNextClick}
                        >
                            <FiChevronRight size={32} />
                        </div>
                    )}
                    <div className="w-full absolute z-10 bottom-0 right-0 left-0 flex items-center justify-center gap-x-8 mb-3">
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.exterior)}
                        >
                            <img
                                src={carDetails?.images?.exterior?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.interior)}
                        >
                            <img
                                src={carDetails?.images?.interior?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div
                            className="w-18 h-18 rounded-full overflow-hidden cursor-pointer border-3 border-blue-700"
                            onClick={() => setImageList(carDetails?.images?.tyres)}
                        >
                            <img
                                src={carDetails?.images?.tyres?.[0]}
                                alt={carDetails?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="w-full shadow rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Car Overview</h3>
                    <div className="w-full grid grid-cols-3 gap-4">
                        <OverviewItem
                            icon="registration"
                            title="Reg year"
                            value={carDetails?.reg_year}
                        />
                        <OverviewItem
                            icon="fuel"
                            title="Fuel type"
                            value={carDetails?.fuel_type}
                        />
                        <OverviewItem
                            icon="transmission"
                            title="Transmission"
                            value={carDetails?.transmission_type}
                        />
                        <OverviewItem
                            icon="engine"
                            title="Engine"
                            value={`${carDetails?.engine_displacement}cc`}
                        />
                        <OverviewItem
                            icon="ownership"
                            title="Ownership"
                            value={carDetails?.ownership}
                            isOwnership={true}
                        />
                        <OverviewItem
                            icon="make"
                            title="Make year"
                            value={carDetails?.make_year}
                        />
                        <OverviewItem
                            icon="seats"
                            title="Seats"
                            value={carDetails?.no_of_seats}
                        />
                        <OverviewItem
                            icon="reg_number"
                            title="Reg number"
                            value={carDetails?.reg_number}
                        />
                        <OverviewItem
                            icon="insurance"
                            title="Insurance"
                            value={carDetails?.insurance}
                        />
                        <OverviewItem
                            icon="location"
                            title="Location"
                            value={carDetails?.location}
                        />
                    </div>
                </div>
                <div className="w-full shadow rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Features</h3>
                    <div className="flex flex-col gap-y-2">
                        {Object.keys(carDetails?.features || {})?.map(
                            (feature, index) => (
                                <Accordian
                                    key={`${index}-${feature}`}
                                    title={getTitleCase(feature)}
                                    content={
                                        <FeatureList
                                            featureCategory={feature}
                                            featureList={carDetails?.features?.[feature]}
                                        />
                                    }
                                />))
                        }
                    </div>
                </div>
                <div className="w-full shadow rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Specifications</h3>
                    <div className="flex flex-col gap-y-2">
                        {Object.keys(carDetails?.specifications || {})?.map((specification, index) => (
                            <Accordian
                                key={`specification-${index}`}
                                title={getTitleCase(specification)}
                                content={
                                    <SpecificationList
                                        specificationCategory={specification}
                                        specificationList={
                                            carDetails?.specifications?.[specification]
                                        }
                                    />
                                }
                            />
                        ))}

                    </div>
                </div>
            </div>
            <div className="col-span-4 h-min shadow rounded-lg p-5 relative grid gap-4">
                <div className="w-full">
                    <div className="text-2xl font-semibold w-5/6 flex items-center flex-wrap gap-x-2">
                        <span>{carDetails?.reg_year}</span>
                        <span>{carDetails?.brand}</span>
                        <span>{carDetails?.name}</span>
                        <span className="text-gray-800">{carDetails?.variant}</span>
                    </div>
                    <div onClick={handleLikeToggle} className="absolute top-4.5 right-4 z-10 cursor-pointer flex items-center justify-center w-8 h-8">
                        {isLiked ? <FcLike size={24} /> : <GoHeart size={24} />}
                    </div>
                </div>
                <div className="w-full flex items-center justify-start gap-2">
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{`${getNumberInLocalString(carDetails?.km_driven)} km`}</span>
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{carDetails?.fuel_type}</span>
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{carDetails?.transmission_type}</span>
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md text-center">{`${getOrdinalNumber(carDetails?.ownership)} Owner`}</span>
                </div>
                <p className="flex items-center gap-x-2"><GrLocation /><span>{carDetails?.location}</span></p>
                <p className="font-semibold text-2xl">{`₹ ${getNumberInStringFormat(carDetails?.price)}`}</p>
                <button className="w-full px-10 py-3 bg-blue-800 text-xl text-white rounded-lg">Contact For Booking</button>
            </div>
        </div>
    );
};

export default CarDetails;
