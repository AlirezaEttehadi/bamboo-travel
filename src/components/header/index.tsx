import React from "react";
import { Button, Input, Link, Image } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import NextImage from "next/image";

const Header = () => {
  return (
    <header className="mx-auto lg:p-10 p-4 grid grid-cols-2 md:grid-cols-3">
      <div className="md:flex items-center gap-4 hidden">
        <Link isBlock href="/planner" color="success">
          Trip Planner
        </Link>
        <Link isBlock href="/support" color="success">
          Support
        </Link>
        <Link isBlock href="/wishlist" color="success">
          Wishlist
        </Link>
      </div>
      <div className="flex md:justify-center">
        <Link href="/">
          <Image
            src="/bamboo-travel-logo.png"
            alt="Bamboo Travel Logo"
            width={192}
            height={192}
            as={NextImage}
            className="h-10 object-contain"
            loading="eager"
          />
        </Link>
      </div>
      <div className="flex items-center justify-end gap-4">
        <Input
          type="text"
          placeholder="Search"
          startContent={
            <IconSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          className="max-w-fit hidden md:block"
        />
        <Button as={Link} variant="ghost" href="/login" color="success">
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          color="success"
          className="md:flex hidden"
        >
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
