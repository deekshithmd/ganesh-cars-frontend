import { CAR_FEATURE_LIST } from "../../constants";
import { TbCheck } from "react-icons/tb";

export const FeatureList = (props) => {
    const { featureList = [], featureCategory = '' } = props;

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {featureList?.length > 0 ? featureList.map((item, index) => {
                return (
                    <div className="flex items-center gap-2" key={index}>
                        <TbCheck color="green" size={16} />
                        <p className="text-sm">{CAR_FEATURE_LIST?.[featureCategory]?.[item]}</p>
                    </div>
                )
            }) : <div className="col-span-3 text-left text-sm text-gray-700">No features found</div>}
        </div>
    )
}