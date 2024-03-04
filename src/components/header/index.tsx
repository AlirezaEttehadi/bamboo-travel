import React from "react";
import { Button, Input, Link } from "@nextui-org/react";
import Image from "next/image";
import { IconSearch } from "@tabler/icons-react";

const Header = () => {
  return (
    <header className="mx-auto lg:p-10 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
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
      <Link href="/">
        <Image
          src="/bamboo-travel-logo.png"
          alt="Bamboo Travel Logo"
          width={200}
          height={200}
          priority
        />
      </Link>
      <div className="flex items-center gap-4">
        <Input
          type="text"
          placeholder="Search"
          startContent={
            <IconSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <Button as={Link} variant="ghost" href="/login" color="success">
          Login
        </Button>
        <Button as={Link} href="/register" color="success">
          Register
        </Button>
      </div>
    </header>
  );
};

export default Header;
