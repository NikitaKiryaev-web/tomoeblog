import React from "react";
import About from "../pages/About";
import Admin from "../pages/Admin";
import Blogs from "../pages/Blogs";
import Login from "../pages/Login";

interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RootPaths {
  LOGIN = "/login",
  BLOG = "/",
  ADMIN = "/admin",
  ABOUT = "/about",
}

export const publicRoutes: IRoute[] = [
  {
    path: RootPaths.LOGIN,
    element: Login,
  },
  {
    path: RootPaths.BLOG,
    element: Blogs,
  },
  {
    path: RootPaths.ABOUT,
    element: About,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RootPaths.ADMIN,
    element: Admin,
  },
  ...publicRoutes,
];
