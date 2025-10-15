import { CAR_SPECIFICATION_LIST } from "../../constants";

export const SpecificationList = (props) => {
    const { specificationList = {}, specificationCategory = "" } = props;

    return (
        <div className="grid grid-cols-2 gap-4">
            {Object.keys(specificationList)?.map((item, index) => {
                return (
                    <div className="grid grid-cols-2 gap-2" key={index}>
                        <span className="text-sm break-words font-medium text-gray-700">{CAR_SPECIFICATION_LIST?.[specificationCategory]?.[item]}</span>
                        <span className="text-sm text-gray-800">{specificationList?.[item]}</span>
                    </div>
                );
            })}
        </div>
    );
};
