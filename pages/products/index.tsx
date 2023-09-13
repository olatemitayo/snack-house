import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Subscribe from "@/components/hero/subscribe";
import ProductList from "@/components/products/product-list";
import React from "react";

export default function products() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <ProductList />
      <Subscribe />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
