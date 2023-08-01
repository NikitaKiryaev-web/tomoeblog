import React from "react";
const About = React.lazy(() => import("../pages/About"));
const Admin = React.lazy(() => import("../pages/Admin"));
const Login = React.lazy(() => import("../pages/Login"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
import Loader from "../components/Loader/Loader";
import Blogs from "../pages/Blog/Blogs";

interface IRoute {
  path: string;
  element: React.ComponentType;
  fallBack: React.ComponentType;
}

export enum RootPaths {
  LOGIN = "/login",
  BLOGS = "/",
  ADMIN = "/admin",
  ABOUT = "/about",
  NOTFOUND = "*",
}

export const publicRoutes: IRoute[] = [
  {
    path: RootPaths.LOGIN,
    element: Login,
    fallBack: Loader,
  },
  {
    path: RootPaths.BLOGS,
    element: Blogs,
    fallBack: Loader,
  },
  {
    path: RootPaths.ABOUT,
    element: About,
    fallBack: Loader,
  },
  {
    path: RootPaths.NOTFOUND,
    element: NotFound,
    fallBack: Loader,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RootPaths.ADMIN,
    element: Admin,
    fallBack: Loader,
  },
  ...publicRoutes,
];
