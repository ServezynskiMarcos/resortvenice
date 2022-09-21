import React from "react";
import Banner from "../Banner/Banner";
import DatePicker from "../DatePicker/DatePicker";
import Rooms from "../Rooms/Rooms";
import Offerts from "../Offerts/Offerts";

const Home = () => {
  return (
      <div>
        <Banner />
        <DatePicker />
        <Offerts />
        <Rooms />
      </div>
  );
};


export default Home;
