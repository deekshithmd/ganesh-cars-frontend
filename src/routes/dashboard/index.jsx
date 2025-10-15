import { CheckAuth } from "../../components/CheckAuth";
import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal";
import CarDetailsForm from "../../components/CarDetailsForm";
import { useCarDataStore } from "../../store/useAppStore";
import { deleteCar, getCarList } from "../../api";


const Dashboard = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedCarDetails, setSelectedCarDetails] = useState({});

    const { allCars, setAllCars } = useCarDataStore();

    useEffect(() => {
        getAllCars()
    }, [])

    const getAllCars = async () => {
        try {
            const cars = await getCarList();
            setAllCars(cars)

        } catch (e) {
            console.log('Error while fetching list', e)
        }
    }

    const handleDeleteCar = async (carId) => {
        try {
            const response = await deleteCar(carId);
            if (response?.status === 204) {
                getAllCars();
            }
        }
        catch (e) {
            console.log('Error while deleting', e)
        }
    }

    const handleClose = () => {
        setShowModal(!showModal);
        setSelectedCarDetails({});
    }


    return (
        <CheckAuth>
            <div className="w-full py-4">
                <div className="w-full flex items-center justify-between my-4">
                    <h3 className="text-3xl font-semibold">Car List</h3>
                    <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => setShowModal(!showModal)}>Add New Car</button>
                </div>
                <div className="grid grid-cols-10 gap-2 border-b-2 border-gray-400 p-2 mb-2">
                    <div className="col-span-1 font-medium">Car Id</div>
                    <div className="col-span-2 font-medium">Image</div>
                    <div className="col-span-1 font-medium">Name</div>
                    <div className="col-span-2 font-medium">Reg No</div>
                    <div className="col-span-2 font-medium">Location</div>
                    <div />
                    <div />
                </div>
                {allCars?.map((car, index) => (
                    <div className="grid grid-cols-10 items-center gap-2 border-b-2 border-gray-300 p-2" key={index}>
                        <div className="col-span-1">{car?.id}</div>
                        <div className="col-span-2">
                            <img src={car?.images?.exterior?.[0]} className="h-16 w-24" />
                        </div>
                        <div className="col-span-1">{car?.name}</div>
                        <div className="col-span-2">{car?.reg_number}</div>
                        <div className="col-span-2">{car?.location}</div>
                        <button className="h-fit px-2 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700" onClick={() => {
                            setSelectedCarDetails(car);
                            setShowModal(!showModal);
                        }}>
                            Update
                        </button>
                        <button className="h-fit px-2 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700" onClick={() => handleDeleteCar(car?.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            {
                showModal && (
                    <Modal content={<CarDetailsForm carDetails={selectedCarDetails} />} handleClose={handleClose} />
                )
            }
        </CheckAuth>
    );
};

export default Dashboard;
