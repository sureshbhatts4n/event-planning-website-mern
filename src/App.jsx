import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignOut from './pages/SignOut'
import SignIn from './pages/SignIn'
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/sign-out' element={<SignOut />} />
    <Route path='/sign-in' element={<SignIn />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}
