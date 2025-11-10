import axios from "axios"

export const addCar = async (carData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/cars`, { ...carData }, { headers: { Authorization: 'Bearer ' + localStorage.getItem('auth_token') } })
        return response;
    }
    catch (error) {
        console.log('Error while adding car', error);
    }
}

export const getCarList = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/cars`)
        const carList = response?.data;
        const parsedCarList = carList?.map((car) => ({ ...car, features: JSON.parse(car?.features), specifications: JSON.parse(car?.specifications), images: JSON.parse(car?.images) }))

        return parsedCarList
    }
    catch (error) {
        console.log('Error while getting car list', error);
    }
}

export const getCarById = async (id) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_SERVER_URL}/cars/${id}`)
        const carData = response?.data;
        const parsedCarData = { ...carData, features: JSON.parse(carData?.features), specifications: JSON.parse(carData?.specifications), images: JSON.parse(carData?.images) }
        return parsedCarData;
    }
    catch (error) {
        console.log('Error while getting car by id', error);
    }
}

export const updateCarDetails = async (carDetails) => {
    try {
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_SERVER_URL}/cars/${carDetails?.id}`, carDetails, { headers: { Authorization: 'Bearer ' + localStorage.getItem('auth_token') } })
        return response;
    }
    catch (error) {
        console.log('Error while updating car details', error);
    }
}

export const deleteCar = async (id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_BACKEND_SERVER_URL}/cars/${id}`, { headers: { Authorization: 'Bearer ' + localStorage.getItem('auth_token') } })
        return response;
    }
    catch (error) {
        console.log('Error while deleting car', error);
    }
}

export const uploadImage = async (formData, isSingle = true) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/upload/${isSingle ? 'single' : 'multiple'}`, formData, { headers: { 'Content-Type': 'multipart/form-data', Authorization: 'Bearer ' + localStorage.getItem('auth_token') } });
        return response;
    }
    catch (error) {
        console.log('Error while uploading image', error);
    }
}


export const userLogin = async (userData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_SERVER_URL}/auth/login`, userData,);
        return response;
    }
    catch (error) {
        console.log('Error while login', error);
    }
}