import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CommentPage from "../pages/CommentPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: ":id", element: <CommentPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
