import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/notFoundPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/clicked", element: <Clicked /> },
  { path: "*", element: <NotFoundPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
