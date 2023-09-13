import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import ProfileInfo from "@/components/profile/profile-information";
import React from "react";

export default function () {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <ProfileInfo />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
