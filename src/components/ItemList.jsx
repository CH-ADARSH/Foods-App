import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    const addCart = () => {
        console.log("AddedItem")
    }
    return <div>
        {items.map((item) =>(
            <div key={item?.card?.info?.id}
                className="p-2 m-1 border-b-2 flex border-gray-200 dark:border-b-slate-400 text-left">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>
                            {item.card.info.name
                            }
                        </span>
                        <span>
                             - ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </span>
                    </div>

                    <p className="text-sm overflow-hidden w-11/12 text-wrap">
                        {item.card.info.description}
                    </p>
                </div>
                <div className=" w-3/12 p-4">
                    <div className="absolute">
                        <button className="p-2 mx-auto my-auto bg-slate-800 shadow-lg rounded-lg
                         text-white font-semibold dark:bg-gray-500 dark:text-white
                         dark:shadow-lg" onClick={addCart}>Add +</button>
                    </div>
                    <div>
                        <img src={CDN_URL + item.card.info.imageId}
                        className=" shadow-lg rounded-lg dark:shadow-xl" />
                    </div>
                </div>

            </div>
        
        ))}
    </div>
}

export default ItemList;