import React from "react";
import JAReactor from "../assets/JAReactor.png";
import {Link} from "react-router-dom";

export const NavBar = () => (
    <nav className="navbar bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}><img src={JAReactor} alt="" width={225} height={60} className="d-inline-block align-text-top" /></Link>
        </div>
    </nav>
    )