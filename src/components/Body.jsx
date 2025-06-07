import ResturantCard from "./ResturantCard";
import resObj from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resObj.map((restaurant) => (
            <ResturantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};
// Always use key with (unique key) remember do not use index value as key it not recommended


export default Body;