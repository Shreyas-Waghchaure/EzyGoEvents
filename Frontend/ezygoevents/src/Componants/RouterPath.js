import { Routes,Route } from "react-router-dom"
import Categories from "../Pages/Categories";
import Login from "../Pages/Login";
import Details from "../Pages/Details";
import Hero from "./HeroSection/Hero";
import NavBar from './Navbar/NavBar';
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import ShowNavbar from "./Navbar/ShowNavBar";
import Explore from "../Pages/Explore";


function RoutingPath()
{
    const element=
    <>
    <ShowNavbar>
         <NavBar/>
    </ShowNavbar>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="explore" element={<Explore/>}/>
        <Route path="categories" element={<Categories/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="Events/:id" element={<Details/>}/>
        <Route path="signup" element={<Signup/>}/>
    </Routes>
    </>

    return element;
}

export default RoutingPath;