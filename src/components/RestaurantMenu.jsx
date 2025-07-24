import Shimmer from "./Shimmer.jsx";
import { json, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";
import RestaurantCategory from "./RestaurantCategory.jsx";


const RestaurantMenu = () => {
    // using state vaiable for menu
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    
    
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
    return (
        <div className="Recommended text-center dark:text-white  dark:bg-neutral-800">
            <h1 className="font-bold my-6 text-2xl dark:text-white dark:bg-neutral-800">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")} -
                {costForTwoMessage}</p>
            {categories.map((categories)=>(
                <RestaurantCategory data={categories?.card?.card} />
            ))}
        </div>
    )
}

export default RestaurantMenu;