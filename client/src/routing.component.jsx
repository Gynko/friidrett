import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home.page";
import Race from "./pages/race/race.page";
import MembersManagement from "./pages/membersManagement/membersManagement.page";
import Header from "./components/header/header.component";

export default function Routing() {
  function BasicLayout() {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/race",
          element: <Race />,
        },
        {
          path: "/members",
          element: <MembersManagement />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
