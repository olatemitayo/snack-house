import useCartProduct from "@/hooks/use-cart-list";
import { UserDetails } from "@/pages/_app";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Icons({ className }: any) {
  const { data } = useCartProduct();

  const [payload, setPayload] = useState<UserDetails>({
    last_name: "",
  });

  useEffect(() => {
    if (localStorage.getItem("my-user")) {
      setPayload(JSON.parse(localStorage.getItem("my-user") as string));
    }

    return () => {};
  }, []);
  return (
    <div>
      <div
        className={clsx(
          "flex gap-[clamp(20px,2vw,32px)] items-center cmd:hidden",
          className
        )}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[clamp(18px,1.5vw,24px)]"
        />
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
        <Link href={"/profile"}>
          {payload.last_name !== "" ? (
            <img
              src="/dp.svg"
              alt="user"
              className="w-[clamp(18px,1.5vw,24px)]"
            />
          ) : (
            <img
              src="/user.svg"
              alt="user"
              className="w-[clamp(18px,1.5vw,24px)]"
            />
          )}
        </Link>
      </div>
    </div>
  );
}
