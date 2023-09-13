import Link from "next/link";
import Button from "../common/button";
import ProfileComp from "./profileComponent";

const History = [
  {
    id: "1",
    img: "/yoghurt.svg",
    alt: "yoghurt",
    name: "ORGANIC CASHEW YOGHURT",
    price: "$12.43",
  },
  {
    id: "2",
    img: "/roasted.svg",
    alt: "roasted",
    name: "ORIGINAL ROASTED CASHEW",
    price: "$21.43",
  },
  {
    id: "3",
    img: "/butter.svg",
    alt: "butter",
    name: "ORIGINAL CASHEW BUTTER",
    price: "$45.43",
  },
  {
    id: "3",
    img: "/butter.svg",
    alt: "butter",
    name: "ORIGINAL CASHEW BUTTER",
    price: "$45.43",
  },
];

export default function OrderHistory() {
  return (
    <div className="">
      <ProfileComp>
        {History.length > 0 ? (
          <div>
            <h2 className="text-[32px] mb-[28px]">Order History</h2>
            <div className=" flex flex-col gap-6 justify-center items-center">
              {History.map((item) => (
                <div className="flex justify-between w-full pb-6 border-b border-[#EBDBE0]">
                  <div className="flex gap-7 items-center">
                    <figure>
                      <img src={item.img} alt={item.alt} width={70} />
                    </figure>
                    <div>
                      <h3>{item.name}</h3>
                      <h3>{item.price}</h3>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Button
                      text="Reorder"
                      className=" px-[28.518px] py-[8.471px] rounded-[4px] w-[150px]  text-[9.035px]"
                    />
                    <Button
                      text="Rate Product"
                      className="bg-[#EDD5E7] px-[20.047px] rounded-[4px] py-[8.471px] w-[150px]  whitespace-nowrap text-[9.035px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <figure>
              <img
                src="/emptycart.png"
                alt="Empty Cart"
                className="w-[clamp(150px,14vw,230px)]"
              />
            </figure>
            <div className="text-center grid gap-[clamp(8px,1vw,16px)]">
              <h3 className="text-[23px] font-bold">
                You don’t have any orders yet.
              </h3>
              <p>Please explore our catalogues to see our current offers.</p>
              <Link href={"/products"}>
                <Button text="Explore" className="cmd:w-full" />
              </Link>
            </div>
          </div>
        )}
      </ProfileComp>
    </div>
  );
}
