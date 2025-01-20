import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import "./global.css";
import { router } from "./routes/routes.jsx";
import Header from "./components/header/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      <Header/>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </StrictMode>
);
