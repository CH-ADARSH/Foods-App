import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="biryani"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <div className="food-details">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating}</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla?.deliveryTime} minutes</h4>
        </div>
      </div>
    );
};

export default ResturantCard;