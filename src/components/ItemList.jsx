import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log(items)
    return <div>
        {items.map((item) =>(
            <div key={item?.card?.info?.id}
                className="p-2 m-1 border-b-2 flex border-gray-200 dark:border-b-slate-400 text-left">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>
                            {item.card.info.name}
                        </span>
                        <span>
                            ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </span>
                    </div>
                    <p className="text-sm">
                        {item.card.info.description}
                    </p>
                </div>
                <div className=" w-3/12 p-4">
                    <img src={CDN_URL + item.card.info.imageId } />
                </div>

            </div>
        
        ))}
    </div>
}

export default ItemList;