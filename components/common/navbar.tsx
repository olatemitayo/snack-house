import Link from "next/link";
import clsx from "clsx";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Popover } from "@mantine/core";
import { useRouter } from "next/router";
import Icons from "./navbarIcons";
import useCartProduct from "@/hooks/use-cart-list";
const navList = [
  {
    id: 1,
    title: "HOME",
    link: "/",
  },
  {
    id: 2,
    title: "SHOP",
    link: "/products",
  },
  {
    id: 3,
    title: "ABOUT US",
    link: "#",
  },
  {
    id: 4,
    title: "CONTACT US",
    link: "#",
  },
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const { data } = useCartProduct();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? "Close navigation" : "Open navigation";

  return (
    <div
      className={clsx(
        "fixed w-full z-10 backdrop-blur-md bg-white/50",
        className
      )}
    >
      <nav className="flex justify-between px-[clamp(10px,6vw,100px)]  items-center py-4 max-w-[1440px] mx-auto">
        <div className="flex gap-[clamp(30px,5vw,80px)] items-center">
          <img
            src="/logo.svg"
            alt="LOGO"
            className="w-[clamp(60px,6vw,95px)]"
          />
          <ul className="flex  gap-[clamp(20px,4vw,56px)] cmd:hidden">
            {navList.map((item) => (
              <Link key={item.id} href={item.link}>
                <li
                  key={item.id}
                  className={`${
                    router.pathname === item.link ||
                    router.pathname === `${item.link}`
                      ? "flex text-[clamp(14px,1vw,16px)] flex-nowrap text-[#771132] underline"
                      : "text-[#121212] flex text-[clamp(14px,1vw,16px)] flex-nowrap"
                  }  `}
                >
                  {item.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div>
          <Icons />
          <div className="hidden cmd:block">
            <Popover width={115} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Burger
                  opened={opened}
                  onClick={toggle}
                  aria-label={label}
                  color="#6B0F2D"
                />
              </Popover.Target>
              <Popover.Dropdown>
                <ul className="flex  flex-col gap-4">
                  {navList.map((item) => (
                    <Link key={item.id} href={item.link} className="flex ">
                      <li
                        key={item.id}
                        className="flex text-[12px] flex-nowrap hover:text-[#771132] hover:underline text-[#121212]"
                      >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                  <Icons className="cmd:!flex" />
                </ul>
              </Popover.Dropdown>
            </Popover>
          </div>
        </div>
      </nav>
    </div>
  );
}
