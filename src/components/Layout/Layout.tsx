import React, { FC } from "react";
import "./Layout.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__wrapper">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
