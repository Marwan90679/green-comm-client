import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
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
import ExploreGardeners from "../Components/ExploreGardeners/ExploreGardeners";
import DashboardLayout from "../Layouts/DashboardLayout";
import Stats from "../Components/Dashboard-components/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "signUp", // Removed leading slash
        Component: SignUp,
      },
      {
        path: "signIn", // Removed leading slash
        Component: SignIn,
      },
      {
        path: "terms&conditions", // Removed leading slash
        Component: TermsAndConditions,
      },
      {
        path: "explore-gardeners", // Removed leading slash
        loader: () => fetch("./gardeners.json"),
        Component: ExploreGardeners,
      },
      {
        path: "browse-tips", // Removed leading slash
        loader: () =>
          fetch("https://green-comm-backend.vercel.app/browse-tips"),
        Component: BrowseTips,
      },
     
      {
        path: "tip/:id", // Removed leading slash
        loader: ({ params }) =>
          fetch(`https://green-comm-backend.vercel.app/tip/${params.id}`),
        element: (
          <PrivateRoute>
            <TipsCard />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    Component: DashboardLayout,
    errorElement: <ErrorPage />, // Added error boundary for dashboard
    children: [
      {
        index: true,
        element: <Stats />, // Consistent use of element prop
      },
      {
        path: "share-tips", // Removed leading slash
        element: (
          <PrivateRoute>
            <ShareTips />
          </PrivateRoute>
        ),
      },
      {
        path: "my-tips", // Removed leading slash
        element: (
          <PrivateRoute>
            <MyTips />
          </PrivateRoute>
        ),
      },
      {
        path: "my-tips/update/:id", // Removed leading slash
        element: (
          <PrivateRoute>
            <UpdateTips />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://green-comm-backend.vercel.app/tip/${params.id}`),
      },
    ],
  },
]);

export default router;
