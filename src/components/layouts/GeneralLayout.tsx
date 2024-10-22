import { PropsWithChildren } from "react";
import MainNavigation from "../core/navigation/MainNavigation";
import Footer from "../core/footer/Footer";

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
