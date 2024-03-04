import React from "react";

import TravelCard from "../travel-card";

const TravelList = () => {
  return (
    <section className="mx-auto lg:p-16 p-4 flex items-center justify-between flex-wrap gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((item) => {
        return <TravelCard key={item} />;
      })}
    </section>
  );
};

export default TravelList;
