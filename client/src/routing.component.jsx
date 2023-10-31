import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
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
          element: <RaceManagement />,
        },
        {
          path: "/members",
          element: <MembersManagement />,
        },
        {
          path: "/members/delete",
          element: <MemberDelete />,
        },
        {
          path: "/members/edit",
          element: <MemberEdit />,
        },
        {
          path: "/members/find",
          element: <MemberFind />,
        },
        {
          path: "/members/fulllist",
          element: <MemberFullList />,
        },
        {
          path: "/members/new",
          element: <MemberNew />,
        },
        {
          path: "/races/delete",
          element: <RaceDelete />,
        },
        {
          path: "/races/edit",
          element: <RaceEdit />,
        },
        {
          path: "/races/find",
          element: <RaceFind />,
        },
        {
          path: "/races/fulllist",
          element: <RaceFullList />,
        },
        {
          path: "/races/new",
          element: <RaceNew />,
        },
        {
          path: "/results",
          element: <ResultsManagement />,
        },
        {
          path: "/results/new",
          element: <ResultsNew />,
        },
        {
          path: "/results/getall",
          element: <ResultsGetAll />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
