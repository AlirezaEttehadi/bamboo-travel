"use client";

import { Button, Image, Tab, Tabs, User } from "@nextui-org/react";
import NextImage from "next/image";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandYoutube,
} from "@tabler/icons-react";

import Rating from "@bamboo/components/rating";
import Link from "next/link";
import UserComment from "@bamboo/components/user-comment";

export default function Hotel() {
  return (
    <main className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/hotel.jpg"
          width={600}
          height={500}
          as={NextImage}
        />
        <div>
          <div className="flex flex-col gap-4 divide-y">
            <div className="flex flex-col gap-4 py-4">
              <Rating rate={5} />
              <h1 className="font-bold text-3xl">The Plaza Hotel</h1>
              <p className="text-gray-600 text-sm font-medium">
                {`Experience New York's Iconic Luxury Hotel on Central Park South`}
              </p>
              <Button color="success" size="lg" fullWidth>
                Book for just 7300$
              </Button>
            </div>
            <div className="py-4 flex flex-col gap-4">
              <h6 className="text-sm text-gray-600 font-medium">Highlights</h6>
              <ul className="list-disc list-inside gap-4 flex flex-col">
                <li className="text-gray-600 text-sm">
                  Guests can enjoy international cuisine at the on-site
                  restaurant.
                </li>
                <li className="text-gray-600 text-sm">
                  {`There is a hairdresser's, Hammam, a spa and wellness centre at
                  the property.`}
                </li>
                <li className="text-gray-600 text-sm">
                  Couples particularly like the location — they rated it 8.7 for
                  a two-person trip.
                </li>
                <li className="text-gray-600 text-sm">All rooms have a TV.</li>
                <li className="text-gray-600 text-sm">
                  Offering an outdoor pool and sun terrace, Hôtel Racine is
                  located in Marrakech, a 5-minute drive from Djemaa El Fna
                  square. The property offers a fitness centre and a free Wi-Fi
                  access in all areas.
                </li>
                <li className="text-gray-600 text-sm">
                  Marrakech Plaza is a 5-minute walk from Hôtel Racine, while
                  Carré Eden Shopping Center is a 10-minute walk away. The
                  nearest airport is Marrakech-Menara Airport, 4 km from the
                  property.
                </li>
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
        <div className="h-[550px]">
          <Tabs>
            <Tab key="reviews" title="Customer Reviews">
              <div className="flex flex-col gap-4 divide-y">
                {Array.of(1, 2, 3).map((item) => {
                  return <UserComment key={item} />;
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
