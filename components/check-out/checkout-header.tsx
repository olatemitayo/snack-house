import Link from "next/link";
import React from "react";
export const CheckHeader = [
  {
    id: "1",
    title: "Cart",
    link: "/cart",
  },
  {
    id: "2",
    title: "Information",
    link: "/cart/information",
  },
  {
    id: "3",
    title: "Shipping",
    link: "/cart/shipping",
  },
  {
    id: "4",
    title: "Payment",
    link: "/cart/payment",
  },
];

export default function CheckOutHeader() {
  return (
    <div className="pt-[130px] flex justify-between px-[clamp(10px,6vw,100px)] w-full items-center max-w-[1440px] mx-auto">
      <div className="flex justify-between w-full">
        {CheckHeader.map((item) => (
          <Link key={item.id} href={item.link} className="flex gap-8">
            <h3 key={item.id}>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
