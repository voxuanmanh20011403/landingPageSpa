import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Router from "./router/Router.tsx";
import "./assets/styles/style.scss";
import "../src/i18n/i18n.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
