import Link from "next/link";
import React from "react";
import Button from "../common/button";

export default function CheckOutPayment() {
  return (
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
        <div className="border border-[#B3B3B3] rounded flex justify-between px-4 py-3 text-[#B3B3B3]">
          <div>Shipping Method</div>
          <div>Free Shipping</div>
          <div className="text-red-500">Change</div>
        </div>
      </div>
      <div className="w-[60%] grid gap-6 mx-auto py-10">
        <div>
          <h2 className="text-[32px] text-center font-bold">Payment</h2>
          <p className="text-center">
            All transactions are secure and encrypted
          </p>
        </div>
        <form action="" className="grid gap-6">
          <div className="border border-[#B3B3B3] rounded-lg flex justify-between items-center p-4 ">
            <div className="flex gap-6 justify-between items-center w-full">
              <p className="text-center">Credit card</p>
              <figure className="flex gap-4">
                <img src="/discover.svg" alt="" />
                <img src="/visa.svg" alt="" />
                <img src="/mastercard.svg" alt="" />
              </figure>
            </div>
          </div>
          {/* card number  */}
          <div className="border border-[#B3B3B3] rounded-lg flex justify-between items-center p-4 bg-[#F5F5F5]">
            <div className="w-full flex justify-between">
              <input
                type="number"
                className="bg-[#F5F5F5] w-[95%]"
                name=""
                placeholder="Card number"
                id=""
              />
              <figure>
                <img src="/lock.svg" alt="" />
              </figure>
            </div>
          </div>
          {/* name on card  */}
          <div className="border border-[#B3B3B3] rounded-lg flex justify-between items-center p-4 bg-[#F5F5F5]">
            <div className="w-full flex justify-between">
              <input
                type="text"
                className="bg-[#F5F5F5] w-full"
                name=""
                placeholder="Name on card"
                id=""
              />
            </div>
          </div>

          <div className="flex justify-between">
            <div className="border border-[#B3B3B3] rounded-lg flex justify-between items-center p-4 bg-[#F5F5F5] w-[48%]">
              <div className="w-full">
                <input
                  type="text"
                  className="bg-[#F5F5F5] w-full"
                  name=""
                  placeholder="Expiry date"
                  id=""
                />
              </div>
            </div>
            <div className="border border-[#B3B3B3] rounded-lg flex justify-between items-center p-4 bg-[#F5F5F5] w-[48%]">
              <div className="flex justify-between w-full">
                <input
                  type="number"
                  className="bg-[#F5F5F5] w-full"
                  name=""
                  placeholder="Security code"
                  id=""
                />
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-3 mt-10">
            <Link href="/cart/shipping">
              <Button
                text="Return to shipping"
                className="bg-white border border-[#771132] !text-[#771132]"
              />
            </Link>
            <Link href={"#"}>
              <Button text="Make a payment" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
