import React from "react";
import { Card, Image, CardFooter, Button } from "@nextui-org/react";

const TravelCard = () => {
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="/hotel.jpg"
        width={400}
        height={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button
          className="text-tiny text-white bg-black/20"
          variant="flat"
          color="default"
          radius="lg"
          size="sm"
        >
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TravelCard;
