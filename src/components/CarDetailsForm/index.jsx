import { useEffect, useState } from "react";

import {
    basicData,
    featuresData,
    specificationsFields,
} from "./constants";


import { addCar, updateCarDetails } from "../../api";



const CarDetailForm = ({ carDetails = {}, handleClose = () => { } }) => {
    const [features, setFeatures] = useState({});
    const [specs, setSpecs] = useState({});
    const [basicDetails, setBasicDetails] = useState({});
    const [images, setImages] = useState({
        interior: [],
        exterior: [],
        tyres: [],
    });
    const [imageUrls, setImageUrls] = useState({
        interior: [],
        exterior: [],
        tyres: [],
    });
    const [thumbNailImage, setThumbNailImage] = useState("");

    useEffect(() => {
        const { thumbnail, features, specifications, images, ...basicData } = carDetails;
        setBasicDetails(basicData);
        setThumbNailImage(thumbnail);
        setFeatures(features);
        setSpecs(specifications);
        setImageUrls(images);
    }, [carDetails])


    const handleFeatureChange = (category, feature, value) => {
        setFeatures((prev) => {
            const updated = { ...prev };
            if (!updated[category]) updated[category] = [];
            if (value === "yes") {
                updated[category] = [...new Set([...updated[category], feature])];
            } else {
                updated[category] = updated[category].filter(
                    (item) => item !== feature
                );
            }
            return updated;
        });
    };

    const handleSpecChange = (category, key, value) => {
        setSpecs((prev) => {
            const updated = { ...prev }
            if (!updated[category]) updated[category] = {}
            updated[category][key] = value
            return updated
        })
    };

    const handleBasicDetailChange = (e, isNumber = false) => {
        const { name, value } = e.target;
        setBasicDetails((prev) => ({ ...prev, [name]: isNumber ? Number(value) : value }));
    };

    const handleImageUpload = (e, type) => {
        const files = Array.from(e.target.files);
        setImages((prev) => ({ ...prev, [type]: files }));
    };

    const uploadImagesByCategory = async (category) => {
        const selectedFiles = images[category];
        if (!selectedFiles || selectedFiles.length === 0) return;

        const uploadedUrls = [];

        for (let file of selectedFiles) {
            const url = await uploadImage(file);
            uploadedUrls.push(url);
        }

        setImageUrls((prev) => ({ ...prev, [category]: uploadedUrls }));
    };

    const handleUploadThumbNailImage = async (e) => {
        const file = e.target.files[0];
        const url = await uploadImage(file);
        setThumbNailImage(url);
    };

    const uploadImage = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append(
            "upload_preset",
            import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
        );
        formData.append("folder", "cars");

        try {
            const response = await fetch(
                `${import.meta.env.VITE_CLOUDINARY_API_URL}/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/auto/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const data = await response.json();
            return data?.secure_url;
        } catch (error) {
            console.error(`Upload failed for ${file.name}:`, error);
        }
    };

    const handleSubmit = async () => {
        const payload = {
            ...basicDetails,
            thumbnail: thumbNailImage,
            features: JSON.stringify(features),
            specifications: JSON.stringify(specs),
            images: JSON.stringify(imageUrls),
        };
        if (carDetails?.id) {
            handleUpdateCarDetails(payload)
        }
        else {
            handleAddCar(payload)
        }
    };

    const handleUpdateCarDetails = async (carDetails) => {
        try {
            const response = await updateCarDetails(carDetails)
            console.log('response after updating details', response);
        }
        catch (error) {
            console.log('Error while adding', error)

        } finally {
            handleClose()
        }
    }

    const handleAddCar = async (carData) => {
        try {
            const response = await addCar(carData)
            console.log('response after adding car', response);
        }
        catch (error) {
            console.log('Error while adding', error)
        } finally {
            handleClose()
        }
    }

    return (
        <div className="p-4 max-h-[90vh] overflow-y-auto w-[80vw] mx-auto bg-white rounded shadow">
            {/* Basic details */}
            <h2 className="text-lg font-semibold mb-2">Basic Car Details</h2>

            <div>
                <label htmlFor="thumbnail">Thumnail image</label>

                {thumbNailImage ? (
                    <img
                        id="thumbnail"
                        src={thumbNailImage}
                        alt={`thumbnail-image`}
                        className="w-32 h-auto object-cover rounded border"
                    />
                ) : <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleUploadThumbNailImage(e)}
                />}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {basicData.map(({ label, name, isNumber = false, placeHolder = '' }) => (
                    <div key={name} className="flex flex-col">
                        <label htmlFor={name} className="text-sm font-medium mb-1">
                            {label}
                        </label>
                        <input
                            type="text"
                            id={name}
                            name={name}
                            placeholder={placeHolder}
                            className="border p-2 rounded"
                            onChange={(e) => handleBasicDetailChange(e, isNumber)}
                            value={basicDetails[name] || ""}
                        />
                    </div>
                ))}
            </div>
            {/* Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {["interior", "exterior", "tyres"].map((type) => (
                    <div key={type} className="flex flex-col">
                        <label className="text-sm font-medium mb-1 capitalize">
                            {type} Images
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => handleImageUpload(e, type)}
                        />
                        <small className="text-xs text-gray-500">
                            {images?.[type]?.length || 0} selected
                        </small>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                            {images?.[type]?.map((file, idx) => (
                                <img
                                    key={idx}
                                    src={URL.createObjectURL(file)}
                                    alt={`${type}-${idx}`}
                                    className="w-full h-20 object-cover rounded border"
                                />
                            ))}
                            {imageUrls?.[type]?.map((url, idx) => (
                                <img
                                    key={idx}
                                    src={url}
                                    alt={`${type}-${idx}`}
                                    className="w-full h-20 object-cover rounded border"
                                />
                            ))}
                            <button
                                onClick={() => uploadImagesByCategory(type)}
                                className="mt-2 text-sm text-blue-600 underline hover:text-blue-800"
                            >
                                Upload {type} Images
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mb-4">
                Car Feature & Specification Form
            </h2>
            {/* Features */}
            <div>
                <h3 className="text-lg font-semibold">Features</h3>
                {Object.entries(featuresData).map(([category, items]) => (
                    <div key={category} className="mb-6">
                        <h4 className="font-semibold text-blue-600 mt-2 capitalize">
                            {" "}
                            {category.replace(/-/g, " ")}
                        </h4>
                        <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                            {items?.map(({ label, value }) => {

                                return <div key={value} className="flex items-center gap-2">
                                    <label className="w-full">{label}</label>
                                    <label className="flex items-center gap-1">
                                        Yes
                                        <input
                                            type="radio"
                                            name={`${category}-${value}`}
                                            checked={features?.[category]?.includes(value)}
                                            value="yes"
                                            onChange={() =>
                                                handleFeatureChange(category, value, "yes")
                                            }
                                        />
                                    </label>
                                    <label className="flex items-center gap-1">
                                        No
                                        <input
                                            type="radio"
                                            name={`${category}-${value}`}
                                            value="no"
                                            onChange={() =>
                                                handleFeatureChange(category, value, "no")
                                            }
                                        />
                                    </label>
                                </div>
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Specifications */}
            <div>
                <h3 className="text-lg font-semibold">Specifications</h3>
                {Object.entries(specificationsFields).map(([sectionKey, fields]) => (
                    <div key={sectionKey} className="border rounded-lg p-4 shadow">
                        <h2 className="text-lg font-semibold mb-4 capitalize">
                            {sectionKey.replace(/-/g, " ")}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {fields.map(({ label, value, placeHolder = '' }) => (
                                <div key={value} className="flex flex-col">
                                    <label htmlFor={value} className="text-sm font-medium mb-1">
                                        {label}
                                    </label>
                                    <input
                                        type="text"
                                        id={value}
                                        name={value}
                                        placeholder={placeHolder}
                                        className="border p-2 rounded"
                                        onChange={(e) => handleSpecChange(sectionKey, value, e.target.value)}
                                        value={specs?.[value] || specs?.[sectionKey]?.[value] || ""}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700"
            >
                {carDetails?.id ? 'Update' : 'Add'}
            </button>
        </div>
    );
};

export default CarDetailForm;
