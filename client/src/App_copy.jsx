import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import PrivateRoute from "./components/PrivateRoute"
function App_copy() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App_copy
