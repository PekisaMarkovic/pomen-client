import { PropsWithChildren } from "react";
import MainNavigation from "@/components/core/navigation/MainNavigation";
import Footer from "@/components/core/footer/Footer";

const GeneralLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MainNavigation />
      {children}
      <Footer />
    </>
  );
};

export default GeneralLayout;
