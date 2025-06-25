import React, { use } from 'react';
import { Navigate, useLocation } from "react-router";

import Loading from '../Pages/Loading';
import { AuthContext } from '../Contexts/AuthContext';


const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) return <Loading></Loading>;

  if (!user)
    return <Navigate to="/signin" state={location.pathname}  />;

  return children;
};

export default PrivateRoute;
