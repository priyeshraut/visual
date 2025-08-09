import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Signin from "./components/Signin";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Search from "./components/Search";
import ExplorePage from "./components/ExplorePage";
import DetailsPage from "./components/DetailsPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: ":explore",
        element: <ExplorePage />
      },
      {
        path: ":media_type/:id",
        element: <DetailsPage />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "/signin",
        element: <Signin />,
      },      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
