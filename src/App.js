import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Earn } from "./components/earn";
import { useState } from "react";
// const [menuopen, setMenuOpen] = useState(false)

const router = createBrowserRouter([
  {
    element: <Layout  />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
         path: "/earn",
        element:<Earn/>
      },
      {
        path: "/dashboard",
        element:<Home/>
      },
      {
         path: "/link-manager",
        element:<Home/>
      }
    ]
  },
  {
    path: "/dashboard",
    element:<Dashboard/>
  }
])

export { router };