import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import FailurePage from "./components/FailurePage";
import SuccessPage from "./components/SuccessPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/success",
      element: <SuccessPage />,
    },
    {
      path: "/failure",
      element: <FailurePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
