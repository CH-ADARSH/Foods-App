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

  if (onlineStatus === false) return <>
    <h1> Looks like you are offline</h1>
    <Shimmer />
  </>


  return listOfRestaurants.length === 0 ? (
      <Shimmer />
  ):(
      <div className="body  dark:bg-neutral-700">
        <div className="filter pl-20 flex items-center ">
          <div className="search m-4 p-3">
            <div>
              <input type="text" className="border border-solid border-black dark:border dark:border-solid dark:border-white"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }} />
              <button className="px-3 py-1 bg-green-100 m-4 shadow-xl rounded-md" onClick={() => {
                console.log(searchText);
                const filteredRestraunt = listOfRestaurants.filter((res) =>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setfilteredRestaurant(filteredRestraunt);
              }}
              > search </button>
            </div>
          </div>
          <div className="search m-4 p-3">
            <button className="px-4 py-2 bg-green-100 shadow-lg rounded-md"
              onClick={() => {
              // filter logic
              const filteredList1 = listOfRestaurants.filter(
                (res) => res.info.avgRatingString >"4.5"
                );
              setfilteredRestaurant(filteredList1); 
            }} 
            >
              Top Rated ⭐</button> 

          </div>
        </div>
        <div className="flex flex-wrap p-[55px] dark:bg-neutral-600">
          {filteredRestaurant.map((restaurants) => (
            <Link key={restaurants.info.id} to={"/restaurants/"+ restaurants.info.id} className="link"><ResturantCard resData={restaurants} /></Link>
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;