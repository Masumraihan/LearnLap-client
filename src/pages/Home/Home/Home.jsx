import React, { useEffect } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Shop from "./Shop/Shop";
import Reviews from "../Reviews/Reviews";
import CustomerCare from "../../CustomerCare/CustomerCare";
import useTitle from "../../../Hooks/UseTitle";

const Home = () => {
  useTitle("Home")
  
  return (
    <>
      <Banner />
      <Gallery />
      <Shop />
      <Reviews />
      <CustomerCare/>
    </>
  );
};

export default Home;
