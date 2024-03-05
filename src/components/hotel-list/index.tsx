import React from "react";

import { hotels } from "@bamboo/data/hotels";

import HotelCard from "../hotel-card";

const HotelList = () => {
  return (
    <section className="mx-auto lg:p-16 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {hotels.map((hotel) => {
        return <HotelCard key={hotel.id} hotel={hotel} />;
      })}
    </section>
  );
};

export default HotelList;
