import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ShowExercise from "./pages/ShowExercise.jsx";
import FilteredPage from "./pages/FilteredPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: ":id", element: <ShowExercise /> },
  { path: "/exercise", element: <FilteredPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
