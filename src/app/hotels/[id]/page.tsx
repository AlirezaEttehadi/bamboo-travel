"use client";

import { Button, Image, Tab, Tabs } from "@nextui-org/react";
import NextImage from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { notFound } from "next/navigation";
import Link from "next/link";

import Rating from "@bamboo/components/rating";
import UserComment from "@bamboo/components/user-comment";
import { hotels } from "@bamboo/data/hotels";

export default function Hotel({ params }: { params: { id: string } }) {
  const hotelID = params.id;

  // it is not the correct way of accessing the hotel data in real world. We should call a service for the given id of hotel and receive just the selected hotel data.
  const selectedHotel = hotels.find((hotel) => hotel.id === +hotelID);

  if (!selectedHotel) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="overflow-hidden">
          <Image
            alt="Card background"
            className="object-cover w-full rounded-xl"
            src={selectedHotel.image}
            width={600}
            height={500}
            as={NextImage}
            loading="eager"
          />
        </div>
        <div>
          <div className="flex flex-col gap-4 divide-y">
            <div className="flex flex-col gap-4 py-4">
              <Rating rate={5} />
              <h1 className="font-bold text-3xl">{selectedHotel.name}</h1>
              <Button color="success" size="lg" fullWidth>
                Book for just {selectedHotel.price}
              </Button>
            </div>
            <div className="py-4 flex flex-col gap-4">
              <h6 className="text-sm text-gray-600 font-medium">Highlights</h6>
              <ul className="list-disc list-inside gap-4 flex flex-col">
                {selectedHotel.highlights.map((item) => {
                  return (
                    <li key={item.id} className="text-gray-600 text-sm">
                      {item.description}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="py-4 flex flex-col gap-4">
              <h6 className="text-sm text-gray-600 font-medium">Share</h6>
              <div className="flex items-center gap-4">
                <Link href="/instagram" color="foreground">
                  <IconBrandInstagram />
                </Link>
                <Link href="/facebook" color="foreground">
                  <IconBrandFacebook />
                </Link>
                <Link href="/meta" color="foreground">
                  <IconBrandMeta />
                </Link>
                <Link href="/youtube" color="foreground">
                  <IconBrandYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
            <Tab key="reviews" title="Customer Reviews">
              <div className="flex flex-col gap-4 divide-y">
                {selectedHotel.comments.map((comment) => {
                  return <UserComment key={comment.id} comment={comment} />;
                })}
              </div>
            </Tab>
            <Tab key="faq" title="FAQ">
              <div className="flex flex-col gap-8">
                {Array.of(1, 2, 3).map((item) => {
                  return (
                    <div key={item} className="flex flex-col gap-2">
                      <h5 className="text-gray-800 font-medium">
                        Can I move my booking to a future date?
                      </h5>
                      <p className="text-gray-500 text-sm">
                        Moving your booking to a future date depends on the
                        policies of the reservation. Please sign in using either
                        your Booking.com account or confirmation number and PIN,
                        select the booking you want to change, and you’ll see
                        what options are available.
                      </p>
                    </div>
                  );
                })}
              </div>
            </Tab>
            <Tab key="license" title="License">
              <p className="text-gray-500 text-sm">
                We make it easy for you to compare Bookings from many hotels,
                property owners and other Service Providers. When you make a
                Booking on our Platform, you enter into a contract with the
                Service Provider (unless otherwise stated). The information on
                our Platform is based on what Service Providers tell us. We do
                our best to keep things up to date at all times, but
                realistically it can take a few hours to update e.g. text
                descriptions and lists of the facilities that Accommodations
                provide. Only Service Providers that have a contractual
                relationship with us will be displayed on our Platform. They may
                offer Travel Experiences outside our Platform as well. We don’t
                own any Accommodations ourselves - each Service Provider is a
                separate company that has agreed to work with us in a certain
                way. Our Platform tells you how many Accommodations you can book
                through us worldwide - and our search results page tells you how
                many of them might be right for you, based on what you’ve told
                us.
              </p>
            </Tab>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
