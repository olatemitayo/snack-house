import React from "react";
import Button from "../common/button";
import ProductItem from "../products/product-item";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";

export default function BestSellers() {
  const { data } = useQuery({
    queryFn: async () => {
      let { data } = await builder.use().products.api.best_seller();
      return data;
    },
    queryKey: builder.products.api.best_seller.get(),
  });

  return (
    <div className="bg-[#F1E7EB]">
      <main className="flex cmd:flex-col gap-3 cmd:gap-6 justify-between text-[#121212] px-[clamp(10px,6vw,100px)]  items-center py-16 cmd:py-4 max-w-[1440px] mx-auto">
        <div className="flex justify-between   cmd:flex-col-reverse  w-full gap-10">
          <div className=" flex cmd:flex-col cmd:w-full w-full justify-between items-center flex-wrap  cmd:gap-y-6  ">
            {data?.map((item: any, index: string) => (
              <ProductItem
                item={item}
                key={index}
                boxStyle="!w-[45%] cmd:!w-full "
              />
            ))}
          </div>

          <div className="w-[35%] cmd:w-full cmd:text-center flex flex-col justify-center">
            <h2 className="text-[clamp(24px,2vw,32px)] mb-4 cmd:font-bold font-normal">
              BEST SELLERS
            </h2>
            <p className="mb-6">
              Featuring our best products sourced from the best locations all
              around the world.
            </p>
            <Button text="Check it out" className="cmd:w-full cmd:hidden" />
          </div>
        </div>
      </main>
      <div className="hidden cmd:block pb-16 px-[clamp(10px,6vw,100px)]">
        <Button text="Check it out" className="cmd:w-full  " />
      </div>
    </div>
  );
}
