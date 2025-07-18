import { useEffect } from "react";

const RestaurantMenu = () => {
    useEffect(() => { 
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=");

        const json = await data.json;

        console.log(json);
    };

    return (
      <div className="menu">
          <h1>Name of restaurant</h1>
          <h2>Menu</h2>
          <ul>
              <li>Biryani</li>
              <li>ice cream</li>
              <li>pulav</li>
          </ul>
      </div>
  )
}

export default RestaurantMenu;