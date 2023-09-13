import Link from "next/link";
import React from "react";
import Button from "../common/button";

export const ShippingMethods = [
  {
    id: "1",
    type: "Free Shipping",
    days: "5/7 business days",
    price: "free",
  },
  {
    id: "2",
    type: "Priority mail",
    days: "3/5 business days",
    price: "$8",
  },
  {
    id: "3",
    type: "Second day air",
    days: "1/2 business days",
    price: "$15",
  },
  {
    id: "4",
    type: "Same day priority",
    days: "Same day",
    price: "$25",
  },
];

export default function CheckOutShipping() {
  return (
    <div>
      <div className="max-w-page mx-auto  px-[clamp(10px,6vw,100px)]">
        <div className="w-[60%] grid gap-6 mx-auto py-10">
          <div className="border border-[#B3B3B3] rounded flex justify-between px-4 py-3 text-[#B3B3B3]">
            <div>Contact</div>
            <div>olatunjitemitayo444@gmail.com</div>
            <div className="text-red-500">Change</div>
          </div>
          <div className="border border-[#B3B3B3] rounded flex justify-between px-4 py-3 text-[#B3B3B3]">
            <div>Address</div>
            <div>23, Olatunji close, Ibadan</div>
            <div className="text-red-500">Change</div>
          </div>
        </div>
        <div className="w-[60%] grid gap-6 mx-auto py-10">
          <h2 className="text-[32px] text-center ">Shipping method</h2>
          {ShippingMethods.map((item) => (
            <div
              key={item.id}
              className="border border-[#B3B3B3] rounded flex justify-between px-4 py-3 "
            >
              <div className="flex gap-6">
                <input type="checkbox" name="" id="" />
                <div>{item.type}</div>
              </div>
              <div className="text-start">{item.days}</div>
              <div>{item.price}</div>
            </div>
          ))}

          <div className="flex justify-center items-center gap-3 mt-10">
            <Link href="/cart/information">
              <Button
                text="Return to information"
                className="bg-white border border-[#771132] !text-[#771132]"
              />
            </Link>
            <Link href={"/cart/payment"}>
              <Button text="Continue to payment" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
// linear-gradient(299deg, #C91A44 0%, #9A3396 100%))
//  background-image: linear-gradient(299deg, #C91A44, 0%, #9A3396, 100%);
