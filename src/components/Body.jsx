import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //local State Variable - super powerful variable hooks in raect
  const [listOfRestaurants, setListOfRestraunt] = useState(resObj);

  useEffect(() => {
    fetchData();
  }, []);
  // so if you want to do something after rendering then write it in useEffect funciton(Hook).
  // in this code 1st body function is rendered , as soon as the render cycle is over it 
  // call's the useEffect hook or funciton
  const fetchData = () => {
    const data = fetch()
  }
    return ( 
      <div className="body">
        <div className="filter">
          <button className="filter-btn"
            onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }} 
          >
            Top Rated Restaurant</button> 
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <ResturantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;