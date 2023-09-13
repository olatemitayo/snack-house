import React from "react";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import SignUp from "@/components/auth/signup";

export default function Register() {
  return (
    <div>
      <Navbar className="" />
      <SignUp />
      <Footer className="" />
    </div>
  );
}
