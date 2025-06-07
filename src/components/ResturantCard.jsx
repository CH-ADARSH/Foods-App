import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
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
          <h4>₹{costForTwo / 100} FOR TWO</h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
    );
};

export default ResturantCard;