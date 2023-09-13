import Join from "@/components/hero/join";
import Subscribe from "@/components/hero/subscribe";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import BestSellers from "@/components/hero/best-sellers";
import FeaturedProduct from "@/components/hero/featured-products";
import Feedbacks from "@/components/hero/feedbacks";
import HeroSection from "@/components/hero/hero-section";
import Stat from "@/components/hero/stat";
import React from "react";
import BackgroundLayout from "@/components/common/bg-layout";

export default function LaningPage() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />

      <HeroSection />

      <Stat />

      <BestSellers />

      <FeaturedProduct />

      <Feedbacks />

      <Join />

      <Subscribe />

      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
