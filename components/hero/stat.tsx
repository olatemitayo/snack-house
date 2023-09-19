import React from "react";
import Button from "../common/button";
import Link from "next/link";

export default function Stat() {
  return (
    <div>
      <main className="flex cmd:flex-col cmd:gap-4 justify-between text-[#121212] px-[clamp(10px,6vw,100px)]  items-center py-16 max-w-[1440px] mx-auto">
        <div className="w-[45%] cmd:w-full">
          <p className="text-[clamp(24px,2vw,32px)] text-[#212427] cmd:text-center">
            Fulfilling every snack need to the best of our abilities{" "}
          </p>
          <p className="mt-6 w-3/5 cmd:w-4/5 cmd:mx-auto cmd:text-center">
            We reached here with our hard work and dedication.
          </p>
          <Link href={"/products"}>
            <Button text="Order now" className="mt-8 cmd:w-full" />
          </Link>
        </div>
        <div className="w-2/5 cmd:w-full grid gap-20 cmd:gap-12">
          <div className="flex justify-between">
            <div>
              <h2 className="text-[clamp(16px,2vw,36px)] font-black">2K+</h2>
              <p>Reviews</p>
            </div>
            <div>
              <h2 className="text-[clamp(16px,2vw,36px)] font-black">1K+</h2>
              <p>Products Sold</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="text-[clamp(16px,2vw,36px)] font-black">10K+</h2>
              <p>Successful Deliveries</p>
            </div>
            <div>
              <h2 className="text-[clamp(16px,2vw,36px)] font-black">50K+</h2>
              <p>Menu Items</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
