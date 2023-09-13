import CheckOutHeader from "@/components/check-out/checkout-header";
import CheckOutPayment from "@/components/check-out/checkout-payment";
import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function payment() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <CheckOutHeader />
      <CheckOutPayment />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
