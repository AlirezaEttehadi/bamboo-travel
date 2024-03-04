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
    <footer className="bg-green-100 py-10">
      <div className="container mx-auto flex flex-col gap-20">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-3xl">Bamboo Travel</h2>
          <div className="flex items-center gap-4">
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
            <Link href="/how-we-work" color="foreground">
              How we work
            </Link>
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs">
          Search flight, hotels, hire cars, travel guides and more with Bamboo
          Travel. Bamboo Travel hundreds of other travel sites at once to get
          you the information you need to make the right decisions.
        </p>
        <div className="flex items-center justify-between">
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
    </footer>
  );
};

export default Footer;
