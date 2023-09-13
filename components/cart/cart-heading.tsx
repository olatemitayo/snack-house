import React from "react";

export default function CartWishHeading({ text }: any) {
  return (
    <div className="pt-[130px]">
      <div className=" max-w-page mx-auto  px-[clamp(10px,6vw,100px)]">
        <h1 className="text-40 border-b pb-[clamp(10px,2vw,24px)]">{text}</h1>
      </div>
    </div>
  );
}
