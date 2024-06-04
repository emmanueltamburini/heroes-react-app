import { createBrowserRouter } from "react-router-dom";
import { HeroesRoot } from "../heroes";
import { LoginPage } from "../auth";
import HeroesRouter from "../heroes/routes/HeroesRouter";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/*",
        element: <HeroesRoot />,
        children: HeroesRouter,
    },
  ]);

export default router;
