import { Outlet } from "react-router";
import MainHeader from "../shared/header/MainHeader";
import Footer from "../shared/footer/Footer";

const Layout = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
