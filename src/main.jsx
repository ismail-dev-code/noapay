import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  
    <HelmetProvider>
    <AuthProvider>
      <ToastContainer position="top-center" />
      <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  
);
