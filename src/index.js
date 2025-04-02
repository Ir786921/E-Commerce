import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Shop from "./Component/Shop";
import Featured from "./Component/Featured";
import Home from "./Component/Home";

const Index = () =>{ 
  return (
    <>
     <Home/>
    {/* <Shop/> */}
    </>
    

  )
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
