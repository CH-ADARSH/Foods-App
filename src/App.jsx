import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
// import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const RestaurantMenu = lazy(()=>import("./components/RestaurantMenu.jsx"))

const Grocery = lazy(() => import("./components/Grocery.jsx"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // creating children route in our page means the navbar is kept fixed when we traverse to about or home page
    children: [
    { 
      path: "/",
      element: <Body />,
    },  
    {
      path: "/about",
      element:<About />,
    },
    {
      path: "/contact",
      element:<Contact />,
      },
      {
      path: "/grocery",
        element: <Suspense fallback={<h1>loaing......</h1>} >
          <Grocery />
        </Suspense>,
      },
      {
        path: "/restaurants/:resId",
        element:<Suspense fallback={<h1>Loading Restaurant Menu</h1>}>
          <RestaurantMenu/>
          </Suspense>,
      },
    ],  
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root")); //creates a dom in the browser

root.render(<RouterProvider router={ appRouter} />);
