import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import E404 from "../Pages/E404/E404";
const GoalDetails = lazy(() => import("../Pages/GoalDetails/GoalDetails"));
const Main =  lazy(() => import("../Pages/Main"));
const Home = lazy(() => import("../Pages/Home"));
const Auth = lazy(() => import("../Pages/Auth/Auth"));
const DashBaord = lazy(() => import("../Pages/DashBaord/DashBaord"));
const regex = /^[0-9]+$/;
const router = createBrowserRouter([
  {
    path: "/",
    element:  <Suspense fallback={<Loading />}><Main /></Suspense>,
    errorElement: <E404 />,
    children:[
      {
        path: "fitness",
        element:  <Suspense fallback={<Loading />}><Home /></Suspense>,
      },
      {
        path: "login",
        element:  <Suspense fallback={<Loading />}><Auth /></Suspense>,
      },
      {
        path: "goalShow/:id",
        element:  <Suspense fallback={<Loading />}><GoalDetails /></Suspense>,
        loader : ({params}) =>{
          if (!regex.test(params.id)) {
            throw new Response("bad request" , {
              statusText: "goal not found" ,
              status: 400
            })
          }
          return true;
        }
      },
      {
        path: "myPlans",
        element:  <Suspense fallback={<Loading />}><DashBaord /></Suspense>,
      },
    ]
  }
]);
export default function AppRouter() {
  const { value } = useSelector((state) => state.mode);
  const darkTheme = createTheme({
    palette: {
      mode: value,
      ...(value === "light"
        ? {
            background: {
              paper: "#e1e1e1",
              default: "#e1e1e1",
            },
            primary: {
              bg: "#e1e1e1",
              main: "#fff",
              light: "hsl(210, 26%, 11%)",
              contrastText: "#000",
              title: "#000",
              secondy: "hsl(210, 26%, 11%, 0.5)",
              thred: "hsl(294.74deg 16.89% 62.04%)"
            },
          }
        : {
            background: {
              paper: "hsl(210, 26%, 11%)",
              default: "hsl(210, 26%, 11%)",
            },
            primary: {
              bg:"hsl(210, 26%, 11%)",
              main: "hsl(210, 26%, 11%)",
              light: "hsl(210, 26%, 11%)",
              contrastText: "hsl(214, 15%, 62%)",
              title: "#fff",
              secondy: "hsl(0, 0%, 100%, 0.1)",
              thred: "hsl(294.74deg 16.89% 62.04%)"
            },
          }),
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}
