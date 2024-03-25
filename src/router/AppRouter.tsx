import { createBrowserRouter, Navigate } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";

export const router = createBrowserRouter([
    {
      path: "/marvel",
      element: <MarvelPage />,
    },
    {
        path: "/dc",
        element: <DcPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/",
        element: <Navigate to="/marvel" />,
    },
]);

export default router;
