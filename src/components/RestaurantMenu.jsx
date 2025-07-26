import Shimmer from "./Shimmer.jsx";
import { json, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";
import { useState } from "react";


const RestaurantMenu = () => {
    // using state vaiable for menu
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;
    
    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info
    
    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
 
    const { title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card 
    
    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories)
    return (
        <div className="Recommended text-center
         dark:text-white dark:bg-neutral-800 my-2">
            <h1 className="font-bold  text-2xl dark:text-white 
             dark:bg-neutral-700">{name}</h1>
            <p className="font-bold text-lg  dark:text-white
             dark:bg-neutral-700">{cuisines.join(", ")} -
                {costForTwoMessage}</p>
                {/* // Controlled component */}
            {categories.map((categories, index) => (
                <RestaurantCategory
                    key={categories?.card?.card.title}
                    data={categories?.card?.card}
                    showItems={index === showIndex && true}
                    // passing state variable to the childeren indirectly using function
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;