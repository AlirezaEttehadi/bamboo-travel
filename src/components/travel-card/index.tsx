import React, { FC } from "react";
import { Card, Image, CardHeader, CardBody } from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";

import Rating from "../rating";

type Props = {
  hotel: {
    id: number;
    name: string;
    price: string;
    rate: number;
    image: string;
  };
};

const TravelCard: FC<Props> = ({ hotel }) => {
  return (
    <Card isPressable as={Link} href={`/hotels/${hotel.id}`}>
      <CardHeader className="py-2 px-4 flex-col items-start gap-2">
        <h4 className="font-bold text-large">{hotel.name}</h4>
        <div className="text-tiny uppercase font-bold">{hotel.price}</div>
        <Rating rate={hotel.rate} />
      </CardHeader>
      <CardBody className="p-0">
        <Image
          alt="Card background"
          className="object-cover w-full rounded-xl"
          src={hotel.image}
          width={600}
          height={500}
          as={NextImage}
        />
      </CardBody>
    </Card>
  );
};

export default TravelCard;
