import CartFull from "@/components/cart/cart-full";
import CartHeading from "@/components/cart/cart-heading";
import CartNone from "@/components/cart/cart-none";
import Navbar from "@/components/common/navbar";
import React from "react";
import Footer from "@/components/common/footer";
import BackgroundLayout from "@/components/common/bg-layout";
import useCartProduct from "@/hooks/use-cart-list";

export default function Cart() {
  const { data, isLoading } = useCartProduct();
  console.log(data);
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <div className="mb-[3rem]">
        {isLoading ? (
          <figure className="flex justify-center items-center w-full mt-[70px] h-[60vh] ">
            <img src="./loadingstate.svg" alt="" />
          </figure>
        ) : (
          <div>
            <CartHeading text="Your Cart List" />
            <div>{data?.results?.length > 0 ? <CartFull /> : <CartNone />}</div>
          </div>
        )}
      </div>
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
