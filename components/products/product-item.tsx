import { motion } from "framer-motion";
import clsx from "clsx";
import { ComponentProps, useState } from "react";
import { Heart } from "iconsax-react";
import Button from "../common/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { ErrorType, handleError } from "@/utils/handle-error";
import details from "@/pages/products/[details]";

export const productImg = [
  {
    id: "2",
    alt: "butter",
    img: "/butter.svg",
  },
  {
    id: "1",
    alt: "yoghurt",
    img: "/yoghurt.svg",
  },
  {
    id: "9",
    alt: "cashew",
    img: "/roasted.svg",
  },
];

interface ProductItemProps extends ComponentProps<"div"> {
  boxStyle?: string;
  item: {
    id?: string | number;
    name?: string;
    image?: string;
    description?: string;
    is_on_sale?: boolean;
    old_price?: string;
    new_price?: string;
    product_type?: string;
    origin_type?: string;
  };
  quantity?: number;
}

export default function ProductItem({ item, boxStyle }: ProductItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [fill, setFill] = useState(false);
  const queryClinet = useQueryClient();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: async (product_id: string | number) => {
      const data = {
        product_id,
        quantity: 1,
      };
      return await builder.use().cart.add_to_Cart(data);
    },
    mutationKey: builder.cart.add_to_Cart.get(),
    onSuccess(data: any) {
      if (data?.data?.detail) {
        return toast.info("Product already in Cart");
      }
      toast.success("Item added to cart");
      queryClinet.invalidateQueries(["Cart List"]);
    },
    onError(error) {
      handleError(error as ErrorType);
    },
  });

  const { mutate: wishmutate, isLoading: wushLoading } = useMutation({
    mutationFn: async (product_id: string | number) => {
      const data = {
        product_id,
      };
      return await builder.use().wishlist.api.add_to_wishlist(data);
    },
    mutationKey: builder.cart.add_to_Cart.get(),
    onSuccess(data: any) {
      if (data?.data?.detail) {
        return toast.info("Product already in Wishlist");
      }
      toast.success("Item added to Wishlist");
      queryClinet.invalidateQueries(["Wish List"]);
    },
    onError(error) {
      handleError(error as ErrorType);
    },
  });

  const isMobileView = window.innerWidth <= 768;

  return (
    <>
      {" "}
      {isMobileView ? (
        <div
          key={item.id}
          className={clsx(
            item.product_type === "per bottle" && "bg-[#E6F1FC]",
            item.product_type === "per cup" && "bg-[#EFECE5]",
            !(
              item.product_type === "per bottle" ||
              item.product_type === "per cup"
            ) && "bg-[#EDD5E7]",
            "flex",
            "relative",
            "flex-col",
            "justify-around",
            "cmd:order-2",
            "p-6",
            "w-[30%]",
            "pview:w-[40%]",
            "lg:!min-h-[420px]",
            "xl:!min-h-[400px]",
            "clg:w-[45%]",
            "clg:!min-h-[380px]",
            "gsm:w-full",
            "!min-h-[470px]",
            "rounded-lg",
            "text-center",
            boxStyle
          )}
        >
          <div className="absolute right-2 cursor-pointer top-2">
            <Heart
              size={30}
              // onClick={(e) =>}
              onClick={() => {
                if (!isLoading && item.id !== undefined) {
                  wishmutate(item.id);
                }
                setFill(!fill);
              }}
              color="#A30551"
              className={`${fill ? "fill-[#A30551]" : null}`}
            />
          </div>

          <Link href={`/products/${item.id}`}>
            <figure
              className={`flex items-center justify-center pointer-events-none  ${
                isHovered ? "scale-150" : ""
              }`}
            >
              {item.product_type === "per bottle" && (
                <img
                  src={"/butter.svg"}
                  alt={item.image}
                  className="object-fit"
                />
              )}
              {item.product_type === "per cup" && (
                <img
                  src={"/yoghurt.svg"}
                  alt={item.image}
                  className="object-fit"
                />
              )}
              {item.product_type === "per plate" && (
                <img
                  src={"/roasted.svg"}
                  alt={item.image}
                  className="object-fit"
                />
              )}
              <img src={item.image} className="hidden object-fill" alt="" />
            </figure>
          </Link>

          <div>
            <div className="text-center">
              <p>
                <i className="text-[12px] font-medium">{item.origin_type}</i>
              </p>
              <h3 className="text-[clamp(16px,1vw,20px)] font-bold">
                {item.name}
              </h3>
            </div>
            <div className="text-center text-[#A30551] font-extrabold mt-6 mb-10">
              <h2 className="text-[clamp(20px,2vw,24px)]">{item.new_price}</h2>
              <p className="text-[10px]">{item.product_type}</p>
            </div>
          </div>
          <Button
            className="w-max text-[16px] "
            text={isLoading ? "ADDING TO CART" : "ADD TO CART"}
            type="submit"
            onClick={() => {
              if (!isLoading && item.id !== undefined) {
                mutate(item.id);
              }
            }}
          />
        </div>
      ) : (
        <motion.div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          key={item.id}
          className={clsx(
            item.product_type === "per bottle" && "bg-[#E6F1FC]",
            item.product_type === "per cup" && "bg-[#EFECE5]",
            !(
              item.product_type === "per bottle" ||
              item.product_type === "per cup"
            ) && "bg-[#EDD5E7]",
            "flex",
            "relative",
            "flex-col",
            "justify-around",
            "cmd:order-2",
            "p-6",
            "w-[30%]",
            "pview:w-[40%]",
            "lg:!min-h-[420px]",
            "xl:!min-h-[400px]",
            "clg:w-[45%]",
            "clg:!min-h-[380px]",
            "gsm:w-full",
            "!min-h-[470px]",
            "rounded-lg",
            "text-center",
            boxStyle
          )}
        >
          <div className="absolute right-2 cursor-pointer top-2">
            {isHovered ? (
              <Heart
                size={30}
                // onClick={(e) =>}
                onClick={() => {
                  if (!isLoading && item.id !== undefined) {
                    wishmutate(item.id);
                  }
                  setFill(!fill);
                }}
                color="#A30551"
                className={`${fill ? "fill-[#A30551]" : null}`}
              />
            ) : null}
          </div>

          <Link href={`/products/${item.id}`}>
            <motion.figure
              whileHover={{
                scale: 2,
              }}
              className={`flex items-center justify-center pointer-events-none  ${
                isHovered ? "scale-150" : ""
              }`}
              initial={false}
              animate={{ scale: isHovered ? 2 : 1 }}
            >
              {item.product_type === "per bottle" && (
                <img
                  src={"/butter.svg"}
                  alt={item.image}
                  className="object-fit"
                />
              )}
              {item.product_type === "per cup" && (
                <img
                  src={"/yoghurt.svg"}
                  alt={item.image}
                  className="object-fit"
                />
              )}
              {item.product_type === "per plate" && (
                <img
                  src={"/roasted.svg"}
                  alt={item.image}
                  className="object-fit"
                />
              )}
              <img src={item.image} className="hidden object-fill" alt="" />
            </motion.figure>
          </Link>
          {isHovered ? (
            <Button
              className="w-max text-[16px] "
              text={isLoading ? "ADDING TO CART" : "ADD TO CART"}
              type="submit"
              onClick={() => {
                if (!isLoading && item.id !== undefined) {
                  mutate(item.id);
                }
              }}
            />
          ) : (
            <div>
              <div className="text-center">
                <p>
                  <i className="text-[12px] font-medium">{item.origin_type}</i>
                </p>
                <h3 className="text-[clamp(16px,1vw,20px)] font-bold">
                  {item.name}
                </h3>
              </div>
              <div className="text-center text-[#A30551] font-extrabold mt-6 mb-10">
                <h2 className="text-[clamp(20px,2vw,24px)]">
                  {item.new_price}
                </h2>
                <p className="text-[10px]">{item.product_type}</p>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
}
