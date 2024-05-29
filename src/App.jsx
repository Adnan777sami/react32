import AboutPage from "./Components/pages/AboutPage"
import Home from "./Components/pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./Components/rootlayout/Layout"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
  </Route>
))

function App() {

  return (
  <>
  <RouterProvider router={router}/>

 
  </>
  )
}

export default App
