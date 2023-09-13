import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";

export default function useCartProduct() {
  const handleCartList = async () => {
    try {
      const { data } = await builder.use().cart.list_cart_item();
      // console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return useQuery({
    queryKey: ["Cart List"],
    queryFn: handleCartList,
  });
}
