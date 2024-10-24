import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BgGradient from "../common/bggradient";

const Banner = () => {
  return (
    <BgGradient>
      <section className="lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center py-28 sm:pt-32 transition-all animate-in">
        <h1 className="text-center py-6">
          Turn your words into{" "}
          <span className="underline underline-offset-8 decoration-dashed decoration-purple-300">
            captivating
          </span>{" "}
          blog posts
        </h1>
        <h2 className="text-center px-4lg:px-0lg:max-w-4xl">
          Convert your video or voice into a Blog Post in seconds with the power
          of AI!
        </h2>

        <Button className="mt-6 text-lg shadow-2xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold hover:no-underline transition-colors delay-1000 hover:animate-out">
          <Link href="/#pricing" className="flex gap-2 items-center">
            <span className="relative">Get SpeakEasy</span>
            <ArrowRight className="animate-pulse font-xl" />
          </Link>
        </Button>
      </section>
    </BgGradient>
  );
};

export default Banner;
