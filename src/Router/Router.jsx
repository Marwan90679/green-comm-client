import React from "react";
import {
    createBrowserRouter,
    
  } from "react-router";
import MainLayouts from '../Layouts/MainLayouts';
import Home from '../Pages/Home/Home';
import SignUp from "../Components/Authentication/SignUp";
import SignIn from "../Components/Authentication/SignIn";
import TermsAndConditions from "../Components/T&C/TermsAndConditions";



import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ShareTips from "../Pages/Share-tips/ShareTips";
import BrowseTips from "../Pages/Browse-Tips/BrowseTips";
import TipsCard from "../Pages/Browse-Tips/TipsCard";
import MyTips from "../Pages/My-Tips/MyTips";
import UpdateTips from "../Components/UpdateTips/UpdateTips";
import { AuthContext } from "../Contexts/AuthContext";
import ExploreGardeners from "../Components/ExploreGardeners/ExploreGardeners";


  const router = createBrowserRouter(
    
    [
    {
      path: "/",
      Component: MainLayouts,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {index:true ,Component:Home},
        {
          path:"/signUp",
          Component:SignUp
        },
        {
          path:"/signIn",
          Component:SignIn
        },
        {
          path:"/terms&conditions",
          Component:TermsAndConditions
        },
        {
          path:"/share-tips",
          element:<PrivateRoute><ShareTips></ShareTips></PrivateRoute>
        },
        {
          path:"/explore-gardeners",
          loader:()=>fetch("./gardeners.json"),
          Component:ExploreGardeners,
          
        },
        {
          path:"/browse-tips",
          loader:()=>fetch("https://green-comm-backend.vercel.app/browse-tips"),
          Component:BrowseTips
        },
        {
          path:"/tip/:id",
          loader:({params})=>fetch(`https://green-comm-backend.vercel.app/tip/${params.id}`),
          element:<PrivateRoute><TipsCard></TipsCard></PrivateRoute>
        },
        {
          path:"/my-tips",
          element:<PrivateRoute><MyTips></MyTips></PrivateRoute>
        },
        {
          path:"/my-tips/update/:id",
          element:<PrivateRoute>
            <UpdateTips></UpdateTips>
            </PrivateRoute>,
            loader:({params})=>fetch(`https://green-comm-backend.vercel.app/tip/${params.id}`)
         
        },
    ]
    },
  ]);

export default router;
