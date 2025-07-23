import Shimmer from "./Shimmer.jsx";
import { json, useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.jsx";


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
    

    return (
        <div className="Recommended dark:text-white  dark:bg-neutral-600">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage }</p>
            <h2>{ title}</h2>
            <ul className="menu">
                {itemCards?.map((item) =>
                    <li key={item.card?.info?.id ||
                        item.card?.info?.categoryId}>
                        {item.card?.info?.name} -
                        {" Rs"}
                        {item.card?.info?.price / 100 ||
                            item.card?.info?.defaultPrice / 100}
                    </li>
                )}    
            </ul>
        </div>
    )
}

export default RestaurantMenu;