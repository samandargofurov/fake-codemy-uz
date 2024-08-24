import { Route, Routes } from "react-router-dom"
import Layout from "./layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Admissions from "./pages/Admissions"
import Courses from "./pages/courses"
import Comunication from "./pages/Comunication"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ErrorPage from "./pages/errorPage"

const routes = [
  {
    "path": "/",
    "element": <Home></Home>,
    "layout": "layout",
  },
  {
    "path": "/about",
    "element": <About></About>,
    "layout": "layout",
  },
  {
    "path": "/admissions",
    "element": <Admissions></Admissions>,
    "layout": "layout",
  },
  {
    "path": "/courses",
    "element": <Courses></Courses>,
    "layout": "layout",
  },
  {
    "path": "/comunication",
    "element": <Comunication></Comunication>,
    "layout": "layout",
  },
  {
    "path": "/login",
    "element": <Login></Login>,
    "layout": "layout",
  },
  {
    "path": "/register",
    "element": <Register></Register>,
    "layout": "layout",
  },
  {
    "path": "*",
    "element": <ErrorPage></ErrorPage>,
    "layout": "layout",
  },

]

const App = () => {
  return (
    <>
      <Routes>
        {
          routes?.map((route, index) => (
            <Route key={index} path={route.path} element={route?.layout === "layout" ? <Layout>{route.element}</Layout> : route.element}></Route>
          ))
        }
      </Routes>
    </>
  )
}

export default App