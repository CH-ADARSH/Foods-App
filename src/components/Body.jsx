import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {RESTAURANT} from "../utils/constants.jsx"
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

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
    
    const infos = await fetch(RESTAURANT);
    const json = await infos.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <Shimmer/>

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
            <Link key={restaurants.info.id} to={"/restaurants/"+ restaurants.info.id} className="link"><ResturantCard resData={restaurants} /></Link>
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;