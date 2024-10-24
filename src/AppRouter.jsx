import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Components/AppBar/Account/login"
import SignUp from "./Components/AppBar/Account/signUp"
import OrderPalne from "./Components/AppBar/Menu/OrderPlane"
import Location from "./Home/location"
import Tour from "./Components/AppBar/Menu/Tour"


const AppRouter = () =>{
    return(
    <Routes>

    <Route path="/" element = {<Home/>} />
    <Route path="/account/login" element = {<Login/>} />
    <Route path="/account/SignUp" element = {<SignUp/>} />
    <Route path="/account/OrderPalne" element = {<OrderPalne/>} />
    <Route path="/account/Location" element = {<Location/>} />
    <Route path="/account/Tour" element = {<Tour/>} />
    </Routes>

    )

}

export default AppRouter