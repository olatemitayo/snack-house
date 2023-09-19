import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import PasswordChange from "@/components/profile/password";
import React from "react";

export default function change_password() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <PasswordChange />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
