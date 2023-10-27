import { cookieStorage, usePortal } from "@ibnlanre/portal";
import Link from "next/link";
import { useRouter } from "next/router";

interface userprops {
  first_name?: string;
  last_name?: string;
  picture?: string;
  email?: string;
  phone_number?: string;
}

export const ProfileLink = [
  {
    id: "1",
    title: "Profile Information",
    link: "/profile",
  },
  {
    id: "2",
    title: "Order History",
    link: "/profile/order-history",
  },
  {
    id: "4",
    title: "Change Password",
    link: "/profile/change-password",
  },
  {
    id: "5",
    title: "Log Out",
    link: "/login",
  },
];
export default function ProfileComp({ children }: any) {
  const [details] = usePortal<userprops>(
    "user_details",
    JSON.parse(cookieStorage.getItem("sh_auth") as string)
  );
  const router = useRouter();

  const handleLogout = () => {
    cookieStorage.clear();
    window.location.assign("/login");
  };
  return (
    <div className="">
      <div className=" max-w-page mx-auto py-[clamp(28px,4vw,48px)]  pt-[130px]  px-[clamp(10px,6vw,100px)]">
        <h1 className="text-40 font-bold">Profile</h1>
        <div className="flex justify-between pt-10 ">
          <div className="w-30% grid gap-10">
            <figure className="flex flex-col items-center gap-4">
              <img src="/dp.svg" alt="" />
              <h5 className="text-[#121212] font-bold">
                {`${details?.last_name} ${details?.first_name}`}
              </h5>

              <p>{details?.email}</p>
            </figure>
            <ul className="grid gap-4 text-center">
              {ProfileLink.map((item) => (
                <Link
                  key={item.id}
                  href={item.link}
                  className={`${
                    router.pathname === item.link ||
                    router.pathname === `${item.link}`
                      ? " bg-[#6B6068] rounded-lg"
                      : ""
                  }  `}
                >
                  {item.id === "5" ? (
                    <li
                      className="border rounded-lg py-[15px] text-[#C51638]  px-16 border-[#771132]"
                      key={item.id}
                      onClick={() => handleLogout()}
                    >
                      {item.title}
                    </li>
                  ) : (
                    <li
                      key={item.id}
                      className={`${
                        router.pathname === item.link ||
                        router.pathname === `${item.link}`
                          ? "border rounded-lg py-[15px] px-16  text-[#fff] border-[#6B6068]"
                          : "border rounded-lg py-[15px] px-16  text-[#121212] border-[#771132]"
                      }  `}
                    >
                      {item.title}
                    </li>
                  )}
                </Link>
              ))}
            </ul>
          </div>
          <div className="w-[50%]">{children}</div>
        </div>
      </div>
    </div>
  );
}
