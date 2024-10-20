import React from "react";
import BigGradient from "../common/bggradient";
import { MoveRight } from "lucide-react";

const HowItWorks = () => {
  return (
    <BigGradient>
      <section className="py-24 relative overflow-hidden">
        <div className="flex items-center justify-center">
          <h2 className="font-bold items-center justify-center text-xl uppercase mb-8 text-purple-600">
            How it works
          </h2>
        </div>
        <h3 className="flex items-center justify-center mb-24 text-center font-bold">
          Easily repurpose your content into SEO focused blog posts
        </h3>

        <div className="flex items-center justify-center gap-4 lg:gap-24">
            <div className="flex flex-col gap-4">
                <p className="text-7xl text-center">🎥</p>
                <p className="text-center font-semibold text-gray-600">Upload Video</p>
            </div>
            <MoveRight size={64} strokeWidth={0.5} className="text-purple-500" />

            <div className="flex flex-col gap-4">
                <p className="text-7xl text-center">🧠</p>
                <p className="text-center font-semibold text-gray-600">AI Magic ✨</p>
            </div>
            <MoveRight size={64} strokeWidth={0.5} className="text-purple-500" />

            <div className="flex flex-col gap-4">
                <p className="text-7xl text-center">📜</p>
                <p className="text-center font-semibold text-gray-600">Blog</p>
            </div>
        </div>
      </section>
    </BigGradient>
  );
};

export default HowItWorks;
