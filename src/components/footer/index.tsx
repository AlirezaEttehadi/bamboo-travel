import { Link } from "@nextui-org/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandMeta,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 p-10">
      <div className="container mx-auto flex flex-col gap-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-bold text-3xl">Bamboo Travel</h2>
          <div className="flex items-center gap-4 grow justify-center">
            <Link href="/company" color="foreground">
              Company
            </Link>
            <Link href="/about" color="foreground">
              About
            </Link>
            <Link href="/careers" color="foreground">
              Careers
            </Link>
            <Link href="/blog" color="foreground">
              Blog
            </Link>
          </div>
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
        <p className="text-center text-gray-400 text-xs mx-6">
          Search flight, hotels, hire cars, travel guides and more with Bamboo
          Travel. Bamboo Travel hundreds of other travel sites at once to get
          you the information you need to make the right decisions.
        </p>
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 justify-between">
          <div className="flex items-center gap-6">
            <b className="text-sm">© 2024 Bamboo Travel</b>
            <Link href="/faq" color="foreground" className="text-xs">
              Help/FAQ
            </Link>
            <Link href="/affiliates" color="foreground" className="text-xs">
              Affiliates
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/company" color="foreground" className="text-xs">
              Company
            </Link>
            <Link href="/about" color="foreground" className="text-xs">
              About
            </Link>
            <Link href="/careers" color="foreground" className="text-xs">
              Careers
            </Link>
            <Link href="/blog" color="foreground" className="text-xs">
              Blog
            </Link>
            <Link href="/how-we-work" color="foreground" className="text-xs">
              How we work
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
