import { Fragment } from "react";
import MainFooter from "../footer/main-footer";

import Footer from "./footer";
import MainHeader from "./main-header";
import UserSidebar from "./user-sidebar";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <UserSidebar />
      <main>{props.children}</main>
      <MainFooter />
      <Footer />
    </Fragment>
  );
};

export default Layout;
