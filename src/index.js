import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Body from "./components/Body";
import Header from "./components/Header";
//import Help from "./components/Help";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import HelpDetails from "./components/HelpDetails";

const Help = lazy(() => import("./components/Help"));

function AppLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/support",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Help />
          </Suspense>
        ),
        children: [
          {
            path: "issues/:supportType",
            element: <HelpDetails />,
          },
        ],
      },
      {
        path: "/searchPage",
        element: <Search />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
