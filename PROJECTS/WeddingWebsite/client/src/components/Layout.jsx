import React from "react";
import ReactDOM from "react-dom"
import { Outlet } from "react-router-dom"
import Navbar from "./NavBar";

export default function Layout(){
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
}