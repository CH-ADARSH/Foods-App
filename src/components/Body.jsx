import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  //local State Variable - super powerful variable hooks in raect
  const [listOfRestaurants, setListOfRestraunt] = useState(resObj);

  let topRated = [];
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