import React, { useState } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import { useRouter } from "next/router";
import { productss } from "./product-list";
import Button from "../common/button";
import { Select } from "@mantine/core";
import ProductQty from "../cart/product-quantity";

export default function ProductDetails({}) {
  const { query } = useRouter();
  const itemDetails = productss.find((el) => el.id === query.details);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="">
      <Navbar />
      <div className="flex justify-between w-full cmd:flex-col cmd:gap-4 max-w-[1440px] mx-auto px-[clamp(10px,6vw,100px)]  py-[clamp(80px,8vw,120px)]">
        <div className="w-[50%] flex items-center justify-center cmd:w-full cmd:flex cmd:items-center cmd:justify-center">
          <img
            src={itemDetails?.img}
            alt=""
            className="w-[clamp(15rem,40vw,40rem)]"
          />
        </div>
        <div className="w-[40%] cmd:w-full flex flex-col gap-8  ">
          <div>
            <h1 className="text-[clamp(18px,1.5vw,24px)] cmd:text-center font-bold">
              {itemDetails?.name}
            </h1>
            <p className="w-3/4 lg:w-full  cmd:text-center ">
              {itemDetails?.details}
            </p>
          </div>
          <div className="flex flex-col cmd:items-center cmd:justify-center  gap-4">
            <h3 className="text-[16px] font-bold">{"QUANTITY"}</h3>
            <ProductQty />
          </div>
          <div className="flex flex-col  cmd:items-center cmd:justify-center  gap-4 ">
            <h3 className="text-[16px] font-bold">{"SIZE"}</h3>
            <div className="w-[136.92px]">
              <Select
                label=""
                placeholder=""
                data={[{ value: "500", label: "500MG" }]}
                classNames={{
                  input: "border-[#B3B3B3]",
                  label: "font-bold text-[clamp(18px,2vw,24px)] ",
                }}
              />
            </div>
          </div>
          <div className="w-[80%] lg:w-full flex flex-col gap-4 ">
            <div className="border border-[#771132] rounded-lg flex justify-between px-4 py-3 ">
              <div className="flex gap-6 items-center">
                <input
                  type="checkbox"
                  name=""
                  checked={selectedOption === "option1"}
                  onChange={() => handleCheckboxChange("option1")}
                  id=""
                  className=" border-[#6B0F2D] rounded-full text-[#6B0F2D] focus:ring-white p-2"
                />
                <div className="text-[clamp(14px,1vw,16px)]">
                  One time order
                </div>
              </div>

              <div className="text-[clamp(14px,1vw,16px)]">
                {itemDetails?.price}
              </div>
            </div>
            <div className="border border-[#771132] rounded-lg flex justify-between px-4 py-3 ">
              <div className="flex gap-6 items-center">
                <input
                  type="checkbox"
                  name=""
                  checked={selectedOption === "option2"}
                  onChange={() => handleCheckboxChange("option2")}
                  id=""
                  className=" border-[#6B0F2D] rounded-full text-[#6B0F2D] focus:ring-white p-2"
                />
                <div className="text-[clamp(14px,1vw,16px)]">
                  Subscribe and save
                </div>
              </div>

              <div className="text-[clamp(14px,1vw,16px)]">
                {itemDetails?.price}
              </div>
            </div>
          </div>
          <Button text="Add to cart" className="cmd:w-full" />
        </div>
      </div>
      <Footer className="bg-[#FCF9FB]" />
    </div>
  );
}
