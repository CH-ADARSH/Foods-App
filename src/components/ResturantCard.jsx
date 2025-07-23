import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRatingString,
      costForTwo,
      sla,
  } = resData?.info;
    return (
      <div
        className="m-4 p-4 w-[250px]  bg-green-100 rounded-md shadow-xl dark:bg-neutral-600 dark:text-white dark:shadow-xl dark:hover:border-solid"
        >
        <div>
          <img
            className="res-logo rounded-md"
            alt="res-logo"
            src={
              CDN_URL +
              cloudinaryImageId
            }
          />
        </div> 
        <div className="food-details text-wrap">
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRatingString}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} minutes</h4>
        </div>
      </div>
    );
};

export default ResturantCard;