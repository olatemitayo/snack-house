import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Links = [
  {
    id: 1,
    title: "Shops",
    link: "/products",
  },
  {
    id: 2,
    title: "About Us",
    link: "#",
  },
  {
    id: 3,
    title: "Wholesales",
    link: "#",
  },
  {
    id: 4,
    title: "Delivery and Shipping",
    link: "#",
  },
];
const Info = [
  {
    id: 1,
    title: "Giftcards",
    link: "#",
  },
  {
    id: 2,
    title: "Careers",
    link: "#",
  },
  {
    id: 3,
    title: "Privacy Policy",
    link: "#",
  },
  {
    id: 4,
    title: "Updates",
    link: "#",
  },
  {
    id: 5,
    title: "Security policy",
    link: "#",
  },
];

interface FooterProps {
  className?: string;
}
export default function Footer({ className }: FooterProps) {
  return (
    <div className={clsx("py-4", className)}>
      <footer className="flex cmd:flex-col cmd:items-center cmd:justify-center cmd:gap-4  px-[clamp(10px,6vw,100px)]   justify-between py-4 max-w-[1440px] mx-auto">
        {/* first column  */}
        <div className="flex flex-col w-[50%] cmd:w-full cmd:items-center cmd:justify-center  gap-7 text-[clamp(14px,1vw,16px)]">
          <div className="flex items-center gap-4">
            <figure>
              <img
                src="/call-calling.svg"
                alt="call"
                className="w-[clamp(24px,2vw,32px)]"
              />
            </figure>
            <div>
              <p>070000CALLSNACKHOUSE</p>
              <p> (+2349065835111)</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <figure>
              <img src="/sms.svg" alt="sms" />
            </figure>
            <p>contact us @snackhouse.com.ng</p>
          </div>
          <figure className="flex gap-4">
            <Link href={"#"}>
              <img src="/instagram.svg" alt="IG" />
            </Link>
            <Link href={"#"}>
              <img src="/facebook.svg" alt="FB" />
            </Link>
            <Link href={"#"}>
              <img src="/whatsapp.svg" alt="WHATSAPP" />
            </Link>
          </figure>
        </div>
        <div className="flex w-[50%] cmd:flex-col cmd:w-full cmd:gap-4 justify-between text-[clamp(14px,1vw,16px)] cmd:text-center">
          {/* second column  */}
          <div>
            <h5 className="mb-6 font-extrabold">Links</h5>
            <ul className="grid gap-4">
              {Links.map((item) => (
                <Link key={item.id} href={item.link}>
                  <li
                    className="hover:text-[#771132] hover:underline"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* third column  */}
          <div>
            <h5 className="mb-6 font-extrabold">More Info</h5>
            <ul className="grid gap-4">
              {Info.map((item) => (
                <Link key={item.id} href={item.link}>
                  <li
                    className="hover:text-[#771132] hover:underline"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
