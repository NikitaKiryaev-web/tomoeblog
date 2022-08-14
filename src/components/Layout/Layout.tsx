import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
