import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./config/Store";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import VideoPlayer from "./components/VideoPlayer";
import SearchResults from "./components/SearchResults";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "video/:id",
        element: <VideoPlayer />,
      },
      {
        path: "result/:searchtext",
        element: <SearchResults />,
      },
      {
        path: "result/:searchtext/video/:id",
        element: <VideoPlayer />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
