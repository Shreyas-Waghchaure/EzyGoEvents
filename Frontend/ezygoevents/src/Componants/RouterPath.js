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
import AdminDashboard from "../Pages/AdminDashboard";
import AllHosts from "./adminDashboard/AllHosts";
import AllEvents from "./adminDashboard/AllEvents";
import EventRegister from "../Pages/EventRegister";
import EventOfCategory from "../Pages/EventOfCategory";


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
        <Route path="event/register" element={<EventRegister/>}/>
        <Route path="events/category/:cat" element={<EventOfCategory/>}/>
        <Route path="details/:id" element={<Details/>}/>
        <Route path="admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="admin/dashboard/hosts" element={<AllHosts/>}/>
        <Route path="admin/dashboard/events" element={<AllEvents/>}/>
    </Routes>
    </>

    return element;
}

export default RoutingPath;