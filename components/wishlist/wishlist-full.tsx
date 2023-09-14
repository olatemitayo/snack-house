import useWishList from "@/hooks/use-wish-list";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";

export default function WishListFull() {
  const { data } = useWishList();
  console.log(data);
  const queryClient = useQueryClient();

  return (
    <div className="">
      <div className=" max-w-page mx-auto  px-[clamp(10px,6vw,100px)]">
        {data?.results.map((item: any) => (
          <div
            key={item.id}
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
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[clamp(clamp(18px,1.5vw,24px))] font-extrabold">
                {item?.product.new_price}
              </h3>
              {/* <button
                onClick={() => mutate(item.id)}
                className="flex gap-10 hover:cursor-pointer px-4 py-1 text-[clamp(14px,0.5vw,16px)] text-[#CA1818]"
              >
                Remove
              </button> */}
            </div>
          </div>
        ))}
        {/* total  */}
      </div>
    </div>
  );
}
