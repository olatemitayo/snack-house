import NewPass from "@/components/auth/new-pass";
import SignIn from "@/components/auth/signin";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function Login() {
  return (
    <div>
      <Navbar className="" />
      <NewPass />
      <Footer className="" />
    </div>
  );
}
