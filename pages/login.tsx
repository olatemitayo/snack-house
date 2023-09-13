import SignIn from "@/components/auth/signin";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import React, { useEffect } from "react";

export default function Login() {
  return (
    <div>
      <Navbar className="" />
      <SignIn />
      <Footer className="" />
    </div>
  );
}
