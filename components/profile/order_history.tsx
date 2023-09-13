import Link from "next/link";
import Button from "../common/button";
import ProfileComp from "./profileComponent";
import useCartProduct from "@/hooks/use-cart-list";

export default function OrderHistory() {
  const { data, isLoading } = useCartProduct();
  return (
    <div className="">
      <ProfileComp>
        {data?.results?.length > 0 ? (
          <div>
            <h2 className="text-[32px] mb-[28px]">Order History</h2>
            <div className=" flex flex-col gap-6 justify-center items-center">
              {data?.results.map((item: any) => (
                <div className="flex justify-between mb-6 w-full pb-6 border-b border-[#EBDBE0]">
                  <div className="flex gap-7 items-center">
                    <figure>
                      {item?.product?.name?.includes("BUTTER") && (
                        <img src={"/butter.svg"} alt={item.image} width={70} />
                      )}
                      {item?.product?.name?.includes("YOGHURT") && (
                        <img src={"/yoghurt.svg"} alt={item.image} width={70} />
                      )}
                      {item?.product?.name?.includes("ROASTED") && (
                        <img src={"/roasted.svg"} alt={item.image} width={70} />
                      )}
                      <img
                        src={item.image}
                        className="hidden"
                        alt=""
                        width={70}
                      />
                      {/* <img src={item.img} alt={item.alt} width={70} /> */}
                    </figure>
                    <div>
                      <h3 className="">{item.product.name}</h3>
                      <h3 className="font-semibold">
                        {item.product.new_price}
                      </h3>
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Button
                      text="Reorder"
                      className=" px-[28.518px] py-[8.471px] rounded-[4px] min-w-[150px]  text-[9.035px]"
                    />
                    <Button
                      text="Rate Product"
                      className="bg-[#EDD5E7] px-[20.047px] rounded-[4px] py-[8.471px] max-w-[150px]  whitespace-nowrap text-[9.035px]"
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
