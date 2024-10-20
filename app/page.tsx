import BgGradient from "@/components/common/bggradient";
import Banner from "@/components/home/banner";
import Divider from "@/components/home/divider";
import Footer from "@/components/home/footer";
import HowItWorks from "@/components/home/howitworks";
import Pricing from "@/components/home/pricing";
import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <BgGradient>
      <main className="mx-auto w-full inset-0 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(50% 0%, 61% 35%,98% 35%,68% 57%, 79% 91%,50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
              }}
            ></div>
          </div>
        </div>
        <Banner />
        <Divider />
        <HowItWorks />
        <Divider />
        <Pricing />
        <Footer />
      </main>
    </BgGradient>
  );
}
