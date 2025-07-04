import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //local State Variable - super powerful variable hooks in raect
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  // so if you want to do something after rendering then write it in useEffect funciton(Hook).
  // in this code 1st body function is rendered , as soon as the render cycle is over it 
  // call's the useEffect hook or funciton
  const fetchData = async () => {
    
    const infos = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
    const json = await infos.json();
    setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setfilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }

  // if (listOfRestaurants.length === 0) { 
  //   return <Shimmer />;
  // }
  return listOfRestaurants.length === 0 ? (
      <Shimmer />
  ):(
      <div className="body">
        <div className="filter">
          <div className="search">
            <div>
              <input type="text" className="search-box" placeholder="Search a restaurant..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }} />
              <button onClick={() => {
                console.log(searchText);
                const filteredRestraunt = listOfRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRestaurant(filteredRestraunt);
              }}
              > search </button>
            </div>
          </div>
          <button className="filter-btn"
            onClick={() => {
            // filter logic
            const filteredList1 = listOfRestaurants.filter(
              (res) => res.info.avgRatingString >"4.5"
              );
            setfilteredRestaurant(filteredList1); 
          }} 
          >
            Top Rated Restaurant</button> 
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurants) => (
            <ResturantCard key={restaurants.info.id} resData={restaurants} />
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;