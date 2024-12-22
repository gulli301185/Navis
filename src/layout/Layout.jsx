import { Outlet } from "react-router";
import MainHeader from "../shared/header/MainHeader";
import Footer from "../shared/footer/Footer";
// import ChangeService from "../pages/ChangeService";

const Layout = () => {
  return (
    <div>
      <MainHeader />
      {/* <ChangeService /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
