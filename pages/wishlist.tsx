import { builder } from "@/api/builder";
import CartHeading from "@/components/cart/cart-heading";
import CartNone from "@/components/cart/cart-none";
import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import WishListFull from "@/components/wishlist/wishlist-full";
import useWishList from "@/hooks/use-wish-list";
// import WishlistProduct from "@/components/wihslist/wish-list";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function Wishlist() {
  const { data, isLoading } = useWishList();

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
            <CartHeading text="Your Wishlist" />
            <div>
              {data?.results?.length > 0 ? <WishListFull /> : <WishListFull />}
            </div>
          </div>
        )}
      </div>
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
