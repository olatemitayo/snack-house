import useCartProduct from "@/hooks/use-cart-list";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import clsx from "clsx";
import { Heart } from "iconsax-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MobileIcons({ className }: any) {
  const { data } = useCartProduct();

  return (
    <div>
      <div
        className={clsx(
          "flex gap-[clamp(20px,2vw,32px)] items-center cmd:hidden",
          className
        )}
      >
        {" "}
        <img
          src="/search.svg"
          alt="search"
          className="w-[clamp(18px,1.5vw,24px)]"
        />
        <Link href={"/wishlist"}>
          <Heart className="w-[clamp(18px,1.5vw,24px)]" color="#000" />
        </Link>
        <Link href={"/cart"} className="relative flex">
          <img
            src="/shoppingcart.svg"
            alt="cart"
            className="w-[clamp(18px,1.5vw,24px)]"
          />
          <div className="absolute text-[#C51638] border border-white rounded-[50%] h-[20px] w-[20px] text-center bg-white  font-extrabold right-0 top-0 mt-[-12px] me-[-18px] text-[12px]">
            {data?.results?.length}
          </div>
        </Link>
      </div>
    </div>
  );
}
