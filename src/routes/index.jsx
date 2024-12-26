import React from "react";
import AuthRoutes from "./AuthRoutes";
import SantriRoutes from "./SantriRoutes";
import PengurusRoutes from "./PengurusRoutes";

const AllRoutes = () => {
  return (
    <>
      <AuthRoutes />
      <SantriRoutes />
      <PengurusRoutes />
    </>
  );
};

export default AllRoutes;
