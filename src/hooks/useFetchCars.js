import { getCarList } from "../api";
import { useCarDataStore } from "../store/useAppStore";
import { useEffect } from "react";

export const useFetchCars = () => {
    const { setAllCars } = useCarDataStore();

    useEffect(() => {
        getAllCars();
    }, [])

    const getAllCars = async () => {
        const carList = await getCarList();
        setAllCars(carList)
    }
}