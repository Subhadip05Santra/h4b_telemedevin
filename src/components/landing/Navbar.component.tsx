import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-5 w-full fixed z-50 text-white flex item-center justify-between pt-6 px-4">
      <Link href="/">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Tele FUNICULAR
        </div>
      </Link>
      <div>
        <Link href="/signup">
          <Button className="mr-4">Sign Up</Button>
        </Link>
        <Link href="/login">
          <Button className="bg-gray-600" variant="secondary">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
