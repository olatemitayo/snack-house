import React from "react";
import Button from "../common/button";

export default function Join() {
  return (
    <div>
      <section className=" max-w-[1440px] mx-auto px-[clamp(10px,6vw,100px)] py-16 cmd:py-4 ">
        <div className="flex flex-col justify-center items-center gap-[clamp(8px,1.5vw,24px)]">
          <h2 className="text-[clamp(24px,2vw,32px)] ">JOIN OUR TEAM</h2>
          <p className="max-w-[40%] xl:max-w-[60%] clg:max-w-[80%] gsm:max-w-full text-center">
            Love what you’ve seen so far and would love to join our team? We’d
            love to meet you!
          </p>
        </div>
        <div className="mt-[clamp(24px,2vw,32px)] text-center">
          <Button
            text="See open posiitons"
            className="cmd:w-full  mt-[clamp(24px,2vw,32px)]"
          />
        </div>
      </section>
    </div>
  );
}
