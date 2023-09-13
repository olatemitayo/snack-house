import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import WishList from "@/components/profile/wishlist";
import React from "react";

export default function wishlist() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <WishList />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
