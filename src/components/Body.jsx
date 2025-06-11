import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  //local State Variable - super powerful variable hooks in raect
  const [listOfRestaurants, setListOfRestaurants] = useState(resObj);
  // const [listOfFilteredRestaurant, setlistOfFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  // so if you want to do something after rendering then write it in useEffect funciton(Hook).
  // in this code 1st body function is rendered , as soon as the render cycle is over it 
  // call's the useEffect hook or funciton
  const fetchData = async () => {
    
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING');
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.97210&lng=72.82460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    // setlistOfFilteredRestaurant(resObj)
    // setListOfRestaurants(data.cards[1].card.card.gridElements.infoWithStyle.restaurants.info)
  }

  if (listOfRestaurants.length === 0) { 
    return <Shimmer />;
  }
    return ( 
      <div className="body">
        <div className="filter">
          <div className="search">
            <div>
              <input type="text" className="search-box"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }} />
              <button onClick={() => {
                console.log(searchText);
                const filteredRestraunt = listOfRestaurants.filter((res) =>res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                setListOfRestaurants(filteredRestraunt);
              }}
              > search </button>
            </div>
          </div>
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
          {listOfRestaurants.map((restaurants) => (
            <ResturantCard key={restaurants.data.id} resData={restaurants} />
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;