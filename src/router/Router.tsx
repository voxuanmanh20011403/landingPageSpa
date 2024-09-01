import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./Routes";
import LayoutComponent from "../layout/Index";

interface RouteType {
  route?: string;
  component?: React.ReactNode;
  key?: string;
}

const getRoutes = (allRoutes: RouteType[]) =>
  allRoutes.map((route) => {
    if (route.route) {
      return (
        <Route path={route.route} element={route.component} key={route.key} />
      );
    }
    return null;
  });

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutComponent />}>{getRoutes(routes)}</Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
