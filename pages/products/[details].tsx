import BackgroundLayout from "@/components/common/bg-layout";
import ProductDetails from "@/components/products/product-details";
import { useRouter } from "next/router";
import React from "react";

export default function details() {
  return (
    <BackgroundLayout>
      <ProductDetails />
    </BackgroundLayout>
  );
}
