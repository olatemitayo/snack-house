import { Select } from "@mantine/core";
import ProductItem from "./product-item";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
// import useProductList from "@/hooks/use-product-list";
import ProductLoading from "../loading/product-loading";
import { PiCaretDownBold } from "react-icons/pi";
import { builder } from "@/api/builder";

export const productss = [
  {
    id: "2",
    alt: "butter",
    img: "/butter.svg",
    name: "ORIGINAL CASHEW BUTTER",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "SINGLE ORIGIN",
    price: "$45.43",
    measure: "bottle",
  },
  {
    id: "1",
    alt: "yoghurt",
    img: "/yoghurt.svg",
    name: "ORGANIC CASHEW YOGURT",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "DOUBLE ORIGIN",
    price: "$12.43",
    measure: "cup",
  },
  {
    id: "9",
    alt: "cashew",
    img: "/roasted.svg",
    name: "ORIGINAL ROASTED CASHEW",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "DOUBLE ORIGIN",
    price: "$21.43",
    measure: "plate",
  },
  {
    id: "3",
    alt: "cashew",
    img: "/roasted.svg",
    name: "ORIGINAL ROASTED CASHEW",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "DOUBLE ORIGIN",
    price: "$21.43",
    measure: "plate",
  },
  {
    id: "4",
    alt: "yoghurt",
    img: "/yoghurt.svg",
    name: "ORGANIC CASHEW YOGURT",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "DOUBLE ORIGIN",
    price: "$12.43",
    measure: "cup",
  },
  {
    id: "6",
    alt: "cashew",
    img: "/roasted.svg",
    name: "ORIGINAL ROASTED CASHEW",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "DOUBLE ORIGIN",
    price: "$21.43",
    measure: "plate",
  },
  {
    id: "8",
    alt: "yoghurt",
    img: "/yoghurt.svg",
    name: "ORGANIC CASHEW YOGURT",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "DOUBLE ORIGIN",
    price: "$12.43",
    measure: "cup",
  },
  {
    id: "5",
    alt: "butter",
    img: "/butter.svg",
    name: "ORIGINAL CASHEW BUTTER",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "SINGLE ORIGIN",
    price: "$45.43",
    measure: "bottle",
  },
  {
    id: "7",
    alt: "butter",
    img: "/butter.svg",
    name: "ORIGINAL CASHEW BUTTER",
    details:
      "This butter features cashew from one of the world’s best known growing region custom craft by experts to create a smooth blend that tastes great on its own.",
    origin: "SINGLE ORIGIN",
    price: "$45.43",
    measure: "bottle",
  },
];

export default function ProductList({}) {
  // const { data, isLoading } = useProductList();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      let response = await builder.use().products.api.products_list();
      return response.data.results;
    },
    queryKey: builder.products.api.products_list.get(),
  });

  return (
    <div className="text-[clamp(24px,2vw,32px)]  pt-[72px] mb-4 cmd:font-bold font-normal max-w-[1440px] mx-auto">
      <div className="flex justify-between px-[clamp(10px,6vw,100px)]  py-[clamp(24px,4vw,48px)] cmd:flex-col">
        <div>
          <Select
            label="CATEGORY"
            placeholder="All products"
            data={[
              { value: "nuts", label: "Cashew nuts" },
              { value: "drinks", label: "Cashew drinks" },
              { value: "butter", label: "Cashew butter" },
              { value: "cheese", label: "Cashew cheese" },
              { value: "yoghurt", label: "Cashew yoghurt" },
              { value: "powder", label: "Cashew powder" },
              { value: "all", label: "All" },
            ]}
            classNames={{
              label: "font-bold text-[clamp(18px,2vw,24px)]",
            }}
          />
        </div>
        <div>
          <Select
            label="SORT BY"
            placeholder="New Products"
            data={[
              { value: "sales", label: "Sales" },
              { value: "premium", label: "Premium Products" },
              { value: "discount", label: "Discounts" },
              { value: "best", label: "Best sellers" },
              { value: "popular", label: "Popular products" },
            ]}
            classNames={{
              label: "font-bold text-[clamp(18px,2vw,24px)]",
            }}
          />
        </div>
      </div>
      <section className="flex items-center flex-wrap gap-y-10 cmd:gap-y-6 px-[clamp(10px,6vw,100px)] justify-between overflow-hidden">
        {isLoading ? (
          <ProductLoading />
        ) : (
          data?.map((item: any, index: string) => (
            <ProductItem item={item} key={index} />
          ))
        )}
      </section>
    </div>
  );
}
