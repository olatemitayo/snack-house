import React from "react";
import Button from "../common/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { LoginData } from "@/types";

// interface userProps {
//   first_name: string;
//   last_name: string;
//   email: string;
// }
export default function HeroSection() {
  // const [user] = usePortal<userProps>(
  //   "auth",
  //   JSON.parse(cookieStorage.getItem("sh_auth") as string)
  // );
  return (
    <div className=" h-screen bg-cover bg-[center_top_0.2rem] bg-no-repeat ">
      <motion.main className="flex cmd:flex-col-reverse cmd:gap-8 justify-between ps-6 pt-[150px] cmd:px-[clamp(10px,6vw,100px)] pe-[clamp(10px,8vw,100px)]  items-center cmd:pt-20 pt-[calc(32px + 72px)] mcmd:pt-[calc(clamp(60px,6vw,96px) + 72px)] max-w-page  mx-auto">
        <motion.figure
          initial={{ y: -1000 }}
          animate={{ y: 5 }}
          transition={{ duration: 0.5 }}
          className="w-[40%] cmd:w-full mcmd:bg-[url('/bean.png')] bg-no-repeat bg-right-top"
        >
          <img src="/cashewnut.svg" alt="nuts" />
        </motion.figure>
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 grid gap-6 cmd:w-full cmd:text-center cmd:max-w-none  "
        >
          {/* <h1 className="text-[clamp(24px,4vw,64px)]  font-extrabold text-[#121212]">
            Welcome {user?.last_name}
          </h1> */}
          <h1 className="text-[clamp(24px,4vw,64px)]  font-extrabold text-[#121212]">
            Enjoy The Premium Cashew Experience
          </h1>
          <p className="w-[80%] text-[#121212] cmd:w-full csm:text-[14px]">
            Deliciously nutty cashew products made for maximum enjoyment in a
            serene environment.
          </p>
          <Link href={"/products"}>
            <Button className="cmd:w-full " text="Order now" />
          </Link>
        </motion.div>
      </motion.main>
      <figure>
        <img src="/desklinear.png" alt="" />
      </figure>
    </div>
  );
}
