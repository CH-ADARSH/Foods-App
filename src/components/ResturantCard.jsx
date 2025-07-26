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
      aggregatedDiscountInfoV3,

  } = resData?.info;  

    return (
      <div
        className="m-4 p-4 w-[250px]  bg-green-100 rounded-md shadow-xl dark:bg-neutral-600 dark:text-stone-300 dark:shadow-xl "
      >
        <div className="relative">
          <div className="absolute bg-blue-300 text-black p-1 ml-1 rounded-sm bottom-0">
            <h1>
              {aggregatedDiscountInfoV3?.header} {aggregatedDiscountInfoV3?.subHeader}
            </h1>
          </div>
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
// Higher Order Component

// input- RestaurantCard ==> RestaurantCardPromoted
export const withPromtedLabel = (ResturantCard ) => {
  return (props) => {
    // console.log(discountInfo)
    return (
      <div>
        {/* <label className="absolute bg-black text-white p-2 y-0 rounded-lg">
          <span>
          </span>
        </label> */}
        <ResturantCard {...props} />
      </div>
    )
  }
}

export default ResturantCard;