import React, { FC } from "react";
import Header from "../Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
