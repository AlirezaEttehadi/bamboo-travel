import React from "react";
import { Card, Image, CardHeader, CardBody } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";

const TravelCard = () => {
  return (
    <Card isPressable as={Link} href="/sample">
      <CardHeader className="py-2 px-4 flex-col items-start gap-2">
        <h4 className="font-bold text-large">The Plaza Hotel</h4>
        <div className="text-tiny uppercase font-bold">7,300 $</div>
        <div className="flex space-x-1">
          <span className="text-yellow-300">&#9733;</span>
          <span className="text-yellow-300">&#9733;</span>
          <span className="text-yellow-300">&#9733;</span>
          <span className="text-yellow-300">&#9733;</span>
          <span className="text-gray-300">&#9733;</span>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src="/hotel.jpg"
          width={800}
          height={800}
          as={NextImage}
        />
      </CardBody>
    </Card>
  );
};

export default TravelCard;
