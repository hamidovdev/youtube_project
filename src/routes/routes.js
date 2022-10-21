import React from "react";
import Home from "../pages/homePage"
import Explore from "../pages/explorePage"
import Subscribe from "../pages/subscribesPage"
import Shorts from "../pages/shortsPage"
import ChangeColor from "../components/changeColor"
export const routes=[
    {
        children:[
            {path:"/",element:<Home/>},
            {index:"true",element:<Home/>,path:"/home"},
            {path:"/explore",element:<Explore/>},
            {path:"/subscribtion",element:<Subscribe/>},
            {path:"/shorts",element:<Shorts/>},
            {path:"/changeColor",element:<ChangeColor/>},
        ]
    }
]