import React from "react";
import Button from "../common/button";
import Link from "next/link";

export default function WishListNone() {
  return (
    <div>
      <section className=" max-w-page mx-auto  px-[clamp(10px,6vw,100px)] flex flex-col gap-10 justify-center items-center py-[clamp(20px,8vw,40px)]">
        <figure>
          <img
            src="/emptycart.png"
            alt="Empty Cart"
            className="w-[clamp(150px,14vw,230px)]"
          />
        </figure>
        <div className="text-center grid gap-[clamp(8px,1vw,16px)]">
          <h3>Your cart is empty.</h3>
          {/* <p>
            Please{" "}
            <Link className="cursor-pointer text-[#771132]" href={"/login"}>
              <span>log in</span>{" "}
            </Link>
            to see your recent orders or explore our current offers.
          </p> */}
          <Link href={"/products"}>
            <Button text="Explore" className="cmd:w-full" />
          </Link>
        </div>
      </section>
    </div>
  );
}
