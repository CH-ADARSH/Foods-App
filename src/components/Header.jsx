import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import ThemeSelector from "../utils/ThemeSelector";
import UserContext from "../utils/UserContext.jsx";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnNameReact, setbtnNameReact] = useState("LogIn");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext)

  // Subscribing to the store using a selector 
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-green-50 shadow-lg sm:bg-yellow-100 lg:bg-pink-50
     dark:bg-neutral-800 dark:shadow-lg dark:shadow-black ">
      <div className="w-50">
        <img
          className="h-28 p-4 pl-20 "
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <div className="ml-5">
          <ThemeSelector/>
        </div>
        <ul className="flex m-4 p-4 pr-[58px]">
          <li className="px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500">Online Status:{onlineStatus ? "Online📡" : "Offline⏳"}</li>
          <li className="px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500">
            <Link to="/">
            Home
            </Link>
          </li>
          <li className="px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500"><Link to="/about">About Us</Link></li>
          <li className="px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500">
            <Link to="/cart">
              Cart ({cartItems.length} items)
            </Link>
          </li>
          <button className="login px-4 dark:text-white dark:hover:text-red-500 transition-colors duration-500  " onClick={() => {
            btnNameReact === 'LogIn' ? setbtnNameReact('LogOut')
              : setbtnNameReact('LogIn');
          }}>{btnNameReact}</button>
          <li className="px-4 font-bold dark:text-white dark:hover:text-red-500 
          transition-colors duration-500">{loggedInUser}</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
