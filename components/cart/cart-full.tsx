import React, { useState } from "react";
import { cartdata, calculateTotal } from "@/data/data";
import Button from "../common/button";
import Link from "next/link";
import ProductQty from "./product-quantity";

import useCartProduct from "@/hooks/use-cart-list";
import axios from "axios";
import { BASE_URL } from "@/config";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { toast } from "react-toastify";
import { ErrorType, handleError } from "@/utils/handle-error";

const total = calculateTotal(cartdata);

export const productImg = [
  {
    id: "2",
    alt: "butter",
    img: "/butter.svg",
  },
  {
    id: "1",
    alt: "yoghurt",
    img: "/yoghurt.svg",
  },
  {
    id: "9",
    alt: "cashew",
    img: "/roasted.svg",
  },
];

export default function CartFull() {
  const { data } = useCartProduct();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: async (product_id: string | number) => {
      const data = {
        product_id,
      };
      return await builder.use().cart.remove_from_cart(data);
    },
    mutationKey: builder.cart.remove_from_cart.get(),
    onSuccess(data: any) {
      toast.success("Item removed from cart");
      queryClient.invalidateQueries(["Cart List"]);
    },
    onError(error) {
      handleError(error as ErrorType);
    },
  });

  return (
    <div className="">
      <div className=" max-w-page mx-auto  px-[clamp(10px,6vw,100px)]">
        {data?.results.map((item: any) => (
          <div
            key={item.product.id}
            className="flex items-center  cmd:justify-center cmd:gap-6 flex-wrap justify-between w-full border-b  py-[clamp(28px,4vw,48px)]"
          >
            <figure>
              {item?.product?.name?.includes("BUTTER") && (
                <img src={"/butter.svg"} alt={item.image} />
              )}
              {item?.product?.name?.includes("YOGHURT") && (
                <img src={"/yoghurt.svg"} alt={item.image} />
              )}
              {item?.product?.name?.includes("ROASTED") && (
                <img src={"/roasted.svg"} alt={item.image} />
              )}
              <img src={item.image} className="hidden" alt="" />
              {/* <img src={item?.product.image} alt={item?.product.image} /> */}
            </figure>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[16px] font-bold">{item?.product.name}</h3>
              <ProductQty />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[clamp(clamp(18px,1.5vw,24px))] font-extrabold">
                {item?.product.new_price}
              </h3>
              <button
                type="submit"
                onClick={() => mutate(item.product_id)}
                className="flex gap-10 hover:cursor-pointer px-4 py-1 text-[clamp(14px,0.5vw,16px)] text-[#CA1818]"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {/* total  */}
      </div>
      ;
      <div className=" max-w-page mx-auto  px-[clamp(10px,6vw,100px)] flex flex-col  items-end">
        <div className="flex text-[clamp(24px,2vw,32px)] gap-4 my-4">
          <h2>SUB TOTAL:</h2>
          {/* <h2>${total.toFixed(2)}</h2> */}
        </div>
        <div className="flex gap-4 cmd:flex-col cmd:w-full  ">
          <Button
            className="bg-white !text-black border border-[#6B0F2D] cmd:!w-full"
            text="Continue shopping"
          />
          <Link href="/cart/information">
            <Button text="Check out" className="cmd:!w-full" />
          </Link>
        </div>
      </div>
    </div>
  );
}
