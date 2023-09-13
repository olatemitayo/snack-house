import { getFeaturedProduct } from "@/api/api-request";
import { useQuery } from "@tanstack/react-query";

export default function useFeaturedProduct() {
  const handleFeaturedProduct = async () => {
    try {
      const { data } = await getFeaturedProduct();

      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return useQuery({
    queryKey: ["Featured Product"],
    queryFn: handleFeaturedProduct,
  });
}
