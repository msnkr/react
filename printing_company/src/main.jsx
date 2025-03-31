import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import ServicePage from "./pages/ServicePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services/", element: <ServicePage /> },
  { path: "/about-us/", element: <AboutUsPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
