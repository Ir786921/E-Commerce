import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Component/Navbar.js";
import Hero from "./Component/Hero.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./Component/Shop.js";

const Index = () => {
  return (
    <div>
         <Navbar/>
         <Hero/>
    </div>
  );
};

const RouteConfig = createBrowserRouter([
    {
      path: "/",   
      element: <Index />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={RouteConfig} />);
