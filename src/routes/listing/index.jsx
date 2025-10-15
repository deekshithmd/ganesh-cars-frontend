import { useNavigate } from "react-router-dom";
import { useCarDataStore } from "../../store/useAppStore";
import CarFilters from "../../components/Filters";
import SortCars from "../../components/SortCars";
import { CarListingCard } from "../..//components/CarListingCard";
import { useFetchCars } from "../../hooks/useFetchCars";

const CarListing = () => {
    const { filteredCars } = useCarDataStore();

    const navigate = useNavigate();

    useFetchCars();


    const openCarDetailsPage = (carId) => {
        navigate(`/details/${carId}`)
    }


    return (
        <div className="w-full h-auto grid grid-cols-5 gap-4 py-6">
            <div className="col-span-1">
                <CarFilters />
            </div>
            <div className="col-span-4">
                <div className="w-full flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{filteredCars?.length} Cars</h3>
                    <SortCars />
                </div>
                <div className="grid grid-cols-3 auto-rows-min gap-4">
                    {filteredCars?.map((car, index) => (
                        <CarListingCard carDetails={car} key={index} handleOpenCarDetailsPage={() => openCarDetailsPage(car?.id)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarListing;
