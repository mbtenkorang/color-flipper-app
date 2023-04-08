import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import HexPage from "./components/HexPage";
import RGBPage from "./components/RGBPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "hex",
        element: <HexPage />,
      },
      {
        path: "rgb",
        element: <RGBPage />,
      },
    ],
  },
]);

export default router;
