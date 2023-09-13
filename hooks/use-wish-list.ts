import { builder } from "@/api/builder";
import { useQuery } from "@tanstack/react-query";

export default function useWishList() {
  const handleWishList = async () => {
    try {
      const { data } = await builder.use().wishlist.list_wish_item();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return useQuery({
    queryKey: ["Wish List"],
    queryFn: handleWishList,
  });
}
