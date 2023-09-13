import CartFull from "@/components/cart/cart-full";
import CartHeading from "@/components/cart/cart-heading";
import CartNone from "@/components/cart/cart-none";
import Navbar from "@/components/common/navbar";
import React from "react";
import { cartdata } from "@/data/data";
import Footer from "@/components/common/footer";
import BackgroundLayout from "@/components/common/bg-layout";

export default function cart() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <div className="mb-[3rem]">
        <CartHeading />
        <div>{cartdata.length > 0 ? <CartFull /> : <CartNone />}</div>
      </div>
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
