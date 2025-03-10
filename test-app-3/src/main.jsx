import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClickedPage from "../pages/ClickedPage";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/clicked", element: <ClickedPage /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
