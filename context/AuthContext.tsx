import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { Dispatch, SetStateAction, useState, createContext } from "react";
import { ShoppingCartProvider } from "./shopping-cart-context";

export interface UserDetails {
  [x: string]: any;
  email?: string;
  first_name: string;
  last_name: string;
}

export interface User {
  email?: string;
  first_name: string;
  last_name: string;
}

export type ContextType = {
  user: UserDetails | null;
  setUser: Dispatch<SetStateAction<UserDetails | null>>;
};

export const AuthContext = createContext<ContextType | null>(null);

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserDetails | null>(null);

  let storeData = {
    user,
    setUser,
  };
  return (
    <ShoppingCartProvider>
      <AuthContext.Provider value={storeData}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </ShoppingCartProvider>
  );
}
