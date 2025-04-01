import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import ServicePage from "./pages/ServicePage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/services/", element: <ServicePage /> },
  { path: "/about-us/", element: <AboutUsPage /> },
  { path: "/contact-us/", element: <ContactUsPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
