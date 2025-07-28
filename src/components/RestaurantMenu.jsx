import Shimmer from "./Shimmer.jsx";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext.jsx";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex, setShowIndex] = useState();
    const [showVegOnly, setShowVegOnly] = useState(false); // State to track veg filter
    const { loggedInUser } = useContext(UserContext)

    if (resInfo === null) return <Shimmer />;
    
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    // console.log(resInfo)
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    // Function to filter vegetarian items
    const getFilteredCategories = () => {
        if (showVegOnly) {
            return categories?.map((category) => {
                const vegItems = category.card?.card?.itemCards?.filter((item) => item.card?.info?.isVeg === 1);
                return {
                    ...category,
                    card: {
                        ...category.card,
                        card: {
                            ...category.card.card,
                            itemCards: vegItems // Replace itemCards with only veg items
                        }
                    }
                };
            }).filter(category => category.card.card.itemCards.length > 0); // Filter out empty categories
        }
        return categories; // Return all categories if veg filter is not active
    };

    const filteredCategories = getFilteredCategories();
    console.log(filteredCategories)

    return (
        <div className="Recommended text-center dark:text-white dark:bg-slate-500 my-2 ">
            <div className="flex justify-start  dark:text-white dark:bg-slate-500">
                <div className="w-52  flex text-center p-4">
                    <div className="bg-transparent border border-black  rounded-[50%] h-6 w-6 dark:border-black">
                       
                    </div>
                    <h4 className="p-1 font-bold dark:text-white dark:hover:text-red-500 
                        transition-colors duration-500">{loggedInUser}</h4>
                </div>
                <div className="justify-center text-center pl-[380px] mt-4">
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p className="font-bold text-lg  ">
                        {cuisines.join(", ")} - {costForTwoMessage}
                    </p>
                </div>
            </div>
            <div>
                <button 
                    className="shadow-lg border border-black bg-transparent p-2 m-4 
                    items-center dark:text-white dark:bg-neutral-700 dark:shadow-lg 
                    rounded-md scale-95 hover:scale-100 dark:border dark:border-red-600 "

                    onClick={() => setShowVegOnly(!showVegOnly)} // Toggle veg filter
                >
                    {showVegOnly ? "All" : "Veg Only"}
                </button>
            </div>
            {/* Render filtered categories */}
            {filteredCategories.map((category, index) => (
                <RestaurantCategory
                    key={category?.card?.card.title}
                    data={category?.card?.card}
                    showItems={index === showIndex}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    );
}

export default RestaurantMenu;
