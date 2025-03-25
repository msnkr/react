import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowExercise from "./pages/ShowExercise.jsx";
import ShowCategories from "./pages/ShowCategories.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Category from "./pages/Category.jsx";
import ShowCategoryExercise from "./pages/ShowCategoryExercise.jsx";

const router = createBrowserRouter([
  { path: "/musckles/", element: <App /> },
  { path: "/musckles/:id", element: <ShowExercise /> },
  { path: "/musckles/show-categories", element: <ShowCategories /> },
  { path: "*", element: <ErrorPage /> },
  { path: "/musckles/show-categories/:id", element: <Category /> },
  {
    path: "/musckles/show-categories/:id/:id",
    element: <ShowCategoryExercise />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
