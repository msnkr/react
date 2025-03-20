import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowExercise from "./pages/ShowExercise.jsx";
import Categories from "./pages/Categories.jsx";

const router = createBrowserRouter([
  { path: "/musckles/", element: <App /> },
  { path: "/musckles/:id", element: <ShowExercise /> },
  { path: "/musckles/categories", element: <Categories /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
