import { useContext } from "react";
import { UserContext } from "./App";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/home.page";
import MembersManagement from "./pages/membersManagement/membersManagement.page";
import Header from "./components/header/header.component";
import MemberDelete from "./pages/memberDelete/memberDelete";
import MemberEdit from "./pages/memberEdit/memberEdit";
import MemberFind from "./pages/memberFind/memberFind";
import MemberFullList from "./pages/memberFullList/memberFullList";
import MemberNew from "./pages/memberNew/memberNew.page";
import RaceDelete from "./pages/race/raceDelete/raceDelete.page";
import RaceEdit from "./pages/race/raceEdit/raceEdit.page";
import RaceFind from "./pages/race/raceFind/raceFind.page";
import RaceFullList from "./pages/race/raceFullList/raceFullList.page";
import RaceNew from "./pages/race/raceNew/raceNew.page";
import RaceManagement from "./pages/race/race.page";
import ResultsManagement from "./pages/results/results.page";
import ResultsNew from "./pages/results/resultsNew/resultsNew.page";
import ResultsGetAll from "./pages/results/resultsGetAll/resultsGetAll.page";

function ProtectedRoute({ children, ...rest }) {
  const { user } = useContext(UserContext);

  if (user === "admin") {
    return children;
  }
  return <Navigate to="/" replace />;
}

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
          path: "/races",
          element: (
            <ProtectedRoute>
              <RaceManagement />
            </ProtectedRoute>
          ),
        },
        {
          path: "/members",
          element: (
            <ProtectedRoute>
              <MembersManagement />
            </ProtectedRoute>
          ),
        },
        {
          path: "/members/delete",
          element: (
            <ProtectedRoute>
              <MemberDelete />
            </ProtectedRoute>
          ),
        },
        {
          path: "/members/edit",
          element: (
            <ProtectedRoute>
              <MemberEdit />
            </ProtectedRoute>
          ),
        },
        {
          path: "/members/find",
          element: (
            <ProtectedRoute>
              <MemberFind />
            </ProtectedRoute>
          ),
        },
        {
          path: "/members/fulllist",
          element: (
            <ProtectedRoute>
              <MemberFullList />
            </ProtectedRoute>
          ),
        },
        {
          path: "/members/new",
          element: (
            <ProtectedRoute>
              <MemberNew />
            </ProtectedRoute>
          ),
        },
        {
          path: "/races/delete",
          element: (
            <ProtectedRoute>
              <RaceDelete />
            </ProtectedRoute>
          ),
        },
        {
          path: "/races/edit",
          element: (
            <ProtectedRoute>
              <RaceEdit />
            </ProtectedRoute>
          ),
        },
        {
          path: "/races/find",
          element: (
            <ProtectedRoute>
              <RaceFind />
            </ProtectedRoute>
          ),
        },
        {
          path: "/races/fulllist",
          element: (
            <ProtectedRoute>
              <RaceFullList />
            </ProtectedRoute>
          ),
        },
        {
          path: "/races/new",
          element: (
            <ProtectedRoute>
              <RaceNew />
            </ProtectedRoute>
          ),
        },
        {
          path: "/results",
          element: (
            <ProtectedRoute>
              <ResultsManagement />
            </ProtectedRoute>
          ),
        },
        {
          path: "/results/new",
          element: (
            <ProtectedRoute>
              <ResultsNew />
            </ProtectedRoute>
          ),
        },
        {
          path: "/results/getall",
          element: (
            <ProtectedRoute>
              <ResultsGetAll />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
