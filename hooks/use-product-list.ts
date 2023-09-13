// import { getCartList, getProductList } from "@/api/api-request";
// import { useQuery } from "@tanstack/react-query";
// import useCartProduct from "./use-cart-list";

// export default function useProductList() {
//   const handleProductList = async () => {
//     try {
//       const { data } = await getProductList();
//       console.log(data.results);
//       return data?.results;
//     } catch (error) {}
//   };
//   return useQuery({
//     queryKey: ["Product_list"],
//     queryFn: handleProductList,
//   });
// }
