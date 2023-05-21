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
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import HelpDetails from "./components/HelpDetails";
import { Provider } from "react-redux";
import store from "./utilities/store";
import LogInForm from "./components/LogInForm";

const Help = lazy(() => import("./components/Help"));

function AppLayout() {
  return (
    <Provider store={store}>
      <div className="min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
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
        path: "/logInForm",
        element: <LogInForm />,
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
