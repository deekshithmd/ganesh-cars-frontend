import { getNumberInStringFormat, getOrdinalNumber } from "../../utils";
import { GrLocation } from "react-icons/gr";
import { FcLike } from "react-icons/fc";
import { GoHeart } from "react-icons/go";
import { useEffect, useState } from "react";

export const CarListingCard = ({ carDetails, handleOpenCarDetailsPage }) => {
    const [isLiked, setIsLiked] = useState(false);

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

    const handleLikeToggle = (e) => {
        e.stopPropagation();
        const likedCarIds = getLikedCarsFromStorage();
        let updatedLikedCarIds;
        if (likedCarIds.includes(carDetails?.id)) {
            updatedLikedCarIds = likedCarIds.filter(id => id !== carDetails?.id);
            setIsLiked(false);
        } else {
            updatedLikedCarIds = [...likedCarIds, carDetails?.id];
            setIsLiked(true);
        }
        saveLikedCarsToStorage(updatedLikedCarIds);
    };

    return (
        <div
            className="w-full h-fit border border-gray-300 rounded-lg overflow-hidden relative cursor-pointer"
            key={carDetails?.id}
            title={carDetails?.name}
            onClick={() => handleOpenCarDetailsPage(carDetails?.id)}
        >
            <div onClick={handleLikeToggle} className="absolute top-1.5 right-2 z-10 cursor-pointer flex items-center justify-center w-8 h-8 rounded-full bg-white">
                {isLiked ? <FcLike size={24} /> : <GoHeart size={24} />}
            </div>
            <img
                src={carDetails?.thumbnail}
                className="w-full h-40 object-cover"
                width={100}
                height={100}
                alt="carDetails Image"
            />
            <div className="w-full flex flex-col items-stretch justify-start pt-2 gap-y-2">
                <div className="flex items-start justify-between px-3">
                    <div className="flex flex-col items-start justify-start font-medium text-sm">
                        <p className="flex items-center justify-start gap-x-1.5">
                            <span>{carDetails?.reg_year}</span>
                            <span>{carDetails?.brand}</span>
                            <span>{carDetails?.name}</span>
                        </p>
                        <span className="font-normal text-xs">
                            {carDetails?.variant}
                        </span>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <p className="font-semibold text-sm">{`₹ ${getNumberInStringFormat(carDetails?.price)}`}</p>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-2 px-3">
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{`${getNumberInStringFormat(carDetails?.km_driven)} km`}</span>
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{carDetails?.fuel_type}</span>
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md">{carDetails?.transmission_type}</span>
                    <span className="min-w-12 px-1 py-0.5 bg-blue-100 rounded-md text-center">{`${getOrdinalNumber(carDetails?.ownership)} owner`}</span>
                </div>
                <div className="flex items-center justify-start gap-2 text-sm bg-gray-200 py-1 px-3">
                    <GrLocation /><span>{carDetails?.location}</span>
                </div>
            </div>
        </div>
    );
};
