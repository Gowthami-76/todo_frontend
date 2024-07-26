import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoutes = ({ userData }) => {
  console.log("procted.........................");
  //const userData = useSelector((state) => state.loginReducer);
  console.log(userData, "userData..........");
  const user = userData;
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
