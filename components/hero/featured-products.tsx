import React from "react";
import ProductItem from "../products/product-item";
import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";
import { ToastContainer, Slide } from "react-toastify";

export default function FeaturedProduct() {
  const { data } = useQuery({
    queryFn: async () => {
      let { data } = await builder.use().products.api.featured_list();
      return data;
    },
    queryKey: builder.products.api.featured_list.get(),
  });

  return (
    <div className="text-[clamp(24px,2vw,32px)] mb-4 cmd:font-bold font-normal max-w-[1440px] mx-auto">
      <div className="px-[clamp(10px,6vw,100px)]  py-[clamp(24px,4vw,48px)] ">
        <h2 className="text-[clamp(24px,2vw,32px)] font-bold cmd:text-center">
          FEATURED PRODUCTS
        </h2>
      </div>
      <section className="flex items-center flex-wrap gap-y-10 cmd:gap-y-6 px-[clamp(10px,6vw,100px)] justify-between ">
        {data?.map((item: any, index: string) => (
          <ProductItem item={item} key={index} />
        ))}
      </section>
    </div>
  );
}
