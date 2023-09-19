import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import OrderHistory from "@/components/profile/order-history";
import React from "react";

export default function Order() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <OrderHistory />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
