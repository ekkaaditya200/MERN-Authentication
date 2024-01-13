import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import PrivateRoute from "./components/PrivateRoute"
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
