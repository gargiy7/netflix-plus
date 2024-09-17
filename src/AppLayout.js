import React from "react";
import Body from "./components/Body";
import Browse from "./components/Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import MovieDetailPage from "./components/MovieDetailPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  // {
  //   path: "/browse/:id",
  //   element: <MovieDetailPage />,
  // },
]);

const AppLayout = () => {
  return (
    <div>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
};

export default AppLayout;
