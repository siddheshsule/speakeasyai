import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Ghost } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="transition-colors font-semibold duration-200 text-gray-600 hover:text-purple-500"
    >
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
      {/* Logo Section */}
      <div className="flex items-center">
        <NavLink href="/">
          <span className="flex items-center gap-2">
            <Ghost className="hover:rotate-12 transform transition duration-200 ease-in-out text-purple-500" />
            <span className="font-extrabold text-lg">SpeakEasy</span>
          </span>
        </NavLink>
      </div>

      {/* Center Links */}
      <div className="flex md:flex-row gap-4 items-center justify-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/#posts">Your Posts</NavLink>
        </SignedIn>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <div className="flex gap-4">
          <SignedIn>
            <NavLink href="/dashboard">Upload a Video</NavLink>
          </SignedIn>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <SignedOut>
          <SignInButton>
            <NavLink href="/sign-in">Sign In</NavLink>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;
