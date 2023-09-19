import { API } from "./axios-config";

//get best sellers list
export const getBestSeller = () => {
  return API.get("/api/best_seller/");
};

//get featured products
export const getFeaturedProduct = () => {
  return API.get("/api/featured_product/");
};

//get all product list
export const getProductList = () => {
  return API.get("/api/products/");
};

//get all cart list
export const getCartList = () => {
  return API.get("/api/list-cart-items/");
};
