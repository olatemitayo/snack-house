import { useQuery } from "@tanstack/react-query";
import { getBestSeller } from "@/api/api-request";

export default function useBestSeller() {
  const handleBestSeller = async () => {
    try {
      const { data } = await getBestSeller();
      return data;
    } catch (error) {}
  };
  return useQuery({
    queryKey: ["Best_Sellers"],
    queryFn: handleBestSeller,
  });
}
