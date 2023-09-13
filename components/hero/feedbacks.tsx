import React from "react";

export default function Feedbacks() {
  return (
    <div className="bg-[#f3f4f6] ">
      <main className=" max-w-[1440px] mx-auto px-[clamp(10px,6vw,100px)] py-16 cmd:py-4 ">
        <section className="flex flex-col items-center ">
          <h2 className="text-[clamp(24px,2vw,32px)] font-bold">
            YUMMY FEEDBACKS
          </h2>
          <p className="max-w-[40%] xl:max-w-[60%] clg:max-w-[80%] gsm:max-w-full text-center">
            We are always available to satisfy a cravings of our dearest
            customers at any hour, any time, any day.
          </p>
        </section>
      </main>
    </div>
  );
}
