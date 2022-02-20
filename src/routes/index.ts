import React from "react";
import RatesPage from "../pages/RatesPage";
import ConvertPage from "../pages/ConvertPage";

export interface RouteType {
  path: string;
  comp: React.ComponentType;
  exact?: boolean;
}

export enum RouteNames {
  CONVERT = "/convert",
  RATES = "/rates",
}

export const mainRoutes: RouteType[] = [
  { path: RouteNames.CONVERT, exact: true, comp: ConvertPage },
  { path: RouteNames.RATES, exact: true, comp: RatesPage },
];
