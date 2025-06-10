import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //local State Variable - super powerful variable hooks in raect
  const [listOfRestaurants, setListOfRestaurants] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  // so if you want to do something after rendering then write it in useEffect funciton(Hook).
  // in this code 1st body function is rendered , as soon as the render cycle is over it 
  // call's the useEffect hook or funciton
  const fetchData = async () => {
    // const data = await fetch("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"
    // );
    
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.info)

  }
  {console.log(setListOfRestaurants)}
    return ( 
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
            onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }} 
          >
            Top Rated Restaurant</button> 
        </div>
        <div className="res-container">
          {setListOfRestaurants.map((restaurants) => (
            <ResturantCard key={restaurants.data.id} resData={restaurants} />
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;