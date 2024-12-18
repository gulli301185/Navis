import { Outlet } from "react-router";
import MainHeader from "../shared/header/MainHeader";
import Footer from "../shared/footer/Footer";
import SecondHeader from "../shared/header/SecondHeader";

const Layout = () => {
  return (
    <div>
      <MainHeader />
      <SecondHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
