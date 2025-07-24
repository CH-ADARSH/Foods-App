import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    console.log(data)
    return <div>
        {/* Header */}
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 
         dark:text-white  dark:bg-neutral-600 dark:shadow-2xl">
            <div className="flex justify-between">
                <span className="font-bold text-lg">{data.title}
                    ({data.itemCards.length})</span>
                <span>⏬</span>

            </div>
        {/* Accordion Body */}

        <ItemList items={data.itemCards}/>
        </div>
    </div>
}


export default RestaurantCategory;