import React from "react";
import { Link } from "react-router-dom";
import JAReactor from "../assets/JAReactor.png";

export const NavBar = () => (
    <nav className="navbar bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="">
                <img src={JAReactor} alt="" width={30} height={24} className="d-inline-block align-text-top" />
                JAReactor
            </a>
        </div>
    </nav>
    )