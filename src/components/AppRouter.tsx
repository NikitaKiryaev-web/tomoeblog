import React, { FC, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";

const AppRouter: FC = () => {
  const auth = true;
  return auth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={
        <Suspense fallback={<route.fallBack />}>
          <route.element />
        </Suspense>
        } />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={
        <Suspense fallback={<route.fallBack />}>
        <route.element />
      </Suspense>} />
      ))}
    </Routes>
  );
};

export default AppRouter;
