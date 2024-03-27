import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "./Root";
import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
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
      ],
    },
  ]);

export default router;
