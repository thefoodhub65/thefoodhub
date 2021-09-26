import { Fragment } from "react";

import Footer from "./footer";
import MainHeader from "./main-header";
import UserSidebar from "./user-sidebar";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <UserSidebar />
      <main style={{ minHeight: "90vh" }}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
