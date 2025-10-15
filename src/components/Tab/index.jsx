import { getPriceInLocalString } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Tabs = (props) => {
    const {
        tabs = [],
        selectedTab = {},
        handleTabChange = () => { },
        tabContent = [],
    } = props;

    const navigate = useNavigate();

    const handleViewCarDetails = (carId) => {
        navigate(`/details/${carId}`);
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-start w-full gap-x-4 border-b border-gray-500">
                {tabs.map((tab) => {
                    return (
                        <p
                            key={tab?.id}
                            className={`cursor-pointer ${selectedTab?.id == tab?.id
                                ? "text-blue-700 border-b-2 border-blue-700"
                                : ""
                                }`}
                            onClick={() => handleTabChange(tab)}
                        >
                            {tab.label}
                        </p>
                    );
                })}
            </div>
            <div className="w-full flex justify-stretch py-2 gap-x-3">
                {tabContent?.length > 0 ? (
                    tabContent?.slice(0, 4)?.map((content) => {
                        return (
                            <div
                                className="w-64 h-auto border border-gray-300 rounded-lg overflow-hidden"
                                key={content?.id}
                                title={content?.name}
                            >
                                <img
                                    src={content?.images?.["exterior"]?.[0]}
                                    className="w-full h-34 object-cover"
                                    width={100}
                                    height={100}
                                    alt="Car Image"
                                />
                                <div className="p-3">
                                    <h3 className="font-medium text-xl">{content?.name}</h3>
                                    <p className="text-lg">
                                        {getPriceInLocalString(content?.price)}
                                    </p>
                                    <span
                                        className="text-sm text-blue-500 hover:text-blue-700 hover:underline cursor-pointer"
                                        onClick={() => handleViewCarDetails(content?.id)}
                                    >
                                        View Details
                                    </span>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="w-full flex items-center justify-center h-[241.5px]">No Cars Available Now</div>
                )}
                {tabContent?.length > 4 && (
                    <button className="h-fit px-3 py-2 flex self-center rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                        View All
                    </button>
                )}
            </div>
        </div>
    );
};
