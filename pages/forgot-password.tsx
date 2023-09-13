import PasswordReset from "@/components/auth/password-reset";
import Navbar from "@/components/common/navbar";
import React from "react";

export default function ForgetPassword() {
  return (
    <div>
      <Navbar />
      <PasswordReset />
    </div>
  );
}
