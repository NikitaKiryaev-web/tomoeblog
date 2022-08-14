import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter: FC = () => {
  const auth = true;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.element />} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
