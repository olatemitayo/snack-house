import CheckOutHeader from "@/components/check-out/checkout-header";
import CheckOutShipping from "@/components/check-out/checkout-shipping";
import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function shipping() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB] " />
      <CheckOutHeader />
      <CheckOutShipping />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
