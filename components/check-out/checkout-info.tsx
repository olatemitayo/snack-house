import { Select, TextInput } from "@mantine/core";
import React from "react";
import Button from "../common/button";
import Link from "next/link";

export default function CheckOutInfo() {
  return (
    <div className="max-w-page mx-auto  px-[clamp(10px,6vw,100px)]">
      <div className="w-[60%] grid gap-6 mx-auto py-10">
        <h2 className="text-[32px] font-bold">Delivery Details</h2>
        <Select placeholder="Country" size="md" data={[]} />
        <TextInput placeholder="Address" size="md" />
        <div className="flex justify-between">
          <div className="w-[48%]">
            <TextInput placeholder="First Name" size="md" />
          </div>
          <div className="w-[48%]">
            <TextInput placeholder="Last Name" size="md" />
          </div>
        </div>
        <TextInput placeholder="Apartment/Suite" size="md" />
        <div className="flex justify-center items-center gap-3 mt-10">
          <Link href="/cart">
            <Button
              text="Return to cart"
              className="bg-white border border-[#771132] !text-[#771132]"
            />
          </Link>
          <Link href={"/cart/shipping"}>
            <Button text="Continue to shipping" />
          </Link>
        </div>
      </div>
    </div>
  );
}
