import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/404.jsx";
import HomePage from "./Pages/home.jsx";
import ProductPage from "./Pages/products.jsx";
import Author from "./Pages/author.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/products",
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/author",
    element: <Author />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
