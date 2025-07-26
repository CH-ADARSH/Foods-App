import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems,setShowIndex}) => {
    // accordion
    // const [showItems, setShowItems] = useState(false)
    
    // const handleClick = () => {
    //     setShowItems(!showItems)
    // }
    const handleClick = () => {
        setShowIndex();
    };
    return <div>
        {/* Header */}
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 
         dark:text-white  dark:bg-neutral-600 dark:shadow-black cursor-pointer">
            <div className="flex justify-between" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}
                    ({data.itemCards.length})</span>
                <span>⏬</span>

            </div>
        {/* Accordion Body */}

            {showItems && <ItemList items={data.itemCards} />}
        </div>
    </div>
}


export default RestaurantCategory;