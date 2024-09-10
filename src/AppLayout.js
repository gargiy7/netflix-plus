import React from "react";
import Body from "./components/Body";
import Login from "./components/Login";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const AppLayout = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default AppLayout;
