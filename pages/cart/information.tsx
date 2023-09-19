import CheckOutHeader from "@/components/check-out/checkout-header";
import CheckOutInfo from "@/components/check-out/checkout-info";
import BackgroundLayout from "@/components/common/bg-layout";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

export default function information() {
  return (
    <BackgroundLayout>
      <Navbar className="!bg-[#F1E7EB]" />
      <CheckOutHeader />
      <CheckOutInfo />
      <Footer className="bg-[#FCF9FB]" />
    </BackgroundLayout>
  );
}
