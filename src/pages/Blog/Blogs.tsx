import React from "react";
import { FC } from "react";
import "./Blogs.scss";
import Layout from "../../components/Layout/Layout";
import banner from "../../assets/images/main.png";

const Blogs: FC = () => {
  return (
    <Layout>
      <img className="banner" src={banner} alt="main banner" />
    </Layout>
  );
};

export default Blogs;
