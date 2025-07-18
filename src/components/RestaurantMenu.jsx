import { useState,useEffect } from "react";
import Shimmer from "./Shimmer.jsx";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants.jsx";

const RestaurantMenu = () => {
    // using state vaiable for menu
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
    };

    if (resInfo === null) return <Shimmer />;

    // const {Cards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info
    
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.categories
    
    // const {title} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards)
    return (
        <div className="Recommended">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage }</p>
            <h2>Menu</h2>
            <ul>
                {itemCards?.map((item) =>
                    <li key={item.card?.info?.id || item.card?.info?.categoryId
}>{item.card?.info?.name} -
                        {" Rs"}
                        {item.card?.info?.price / 100 || item.card?.info?.defaultprice / 100}
                    </li>
                )}    
            </ul>
        </div>
    )
}

export default RestaurantMenu;