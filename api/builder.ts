import { createBuilder } from "@ibnlanre/portal";
import { API, AUTHAPI, USERAPI } from "./axios-config";
import { LoginData } from "@/types";

export const builder = createBuilder({
  accounts: {
    api: {
      // sign in
      sign_in: (data: Record<"email" | "password", string>) =>
        AUTHAPI.post<LoginData>("/accounts/api/sign_in/", data),
      // sign up
      sign_up: (
        data: Record<
          | "email"
          | "first_name"
          | "last_name"
          | "password"
          | "confirm_password",
          string
        >
      ) => AUTHAPI.post("/accounts/api/sign_up/", data),
      // forgot password
      forgot_password: (data: Record<"email", string>) =>
        AUTHAPI.post("/accounts/api/forgot_password/", data),
      //verification code
      verify_code: (data: Record<"email" | "verification_code", string>) =>
        AUTHAPI.post("/accounts/api/verify_code/", data),
      //set new password
      setnew_password: (
        data: Record<"email" | "new_password" | "confirm_password", string>
      ) => AUTHAPI.post("/accounts/api/setnew_password/", data),
    },
  },
  cart: {
    // cart list
    list_cart_item: () => API.get("/api/list-cart-items/"),
    //add product to cart
    add_to_Cart: (data: Record<"product_id" | "quantity", number | string>) =>
      API.post("/api/add_to_cart/", data),
    // remove from cart
    remove_from_cart: (data: Record<"product_id", number | string>) =>
      API.post("/api/remove_from_cart/", data),
  },
  wishlist: {
    api: {
      // wish list
      list_wishlist_item: () => API.get("/api/list-wishlist-items/"),
      //add to wish list
      add_to_wishlist: (data: Record<"product_id", any>) =>
        API.post("/api/wishlist/add/", data),
      //remove from wish list
      remove_from_wishlist: (data: Record<"product_id", number | string>) =>
        API.post("/api/wishlist/remove/", data),
    },
  },
  products: {
    api: {
      //get lists of prodduvts
      products_list: () => API.get("/api/products/"),
      //get list of featured products
      featured_list: () => API.get("/api/featured_product/"),
      //get list of best products
      best_seller: () => API.get("/api/best_seller/"),
    },
  },
});
