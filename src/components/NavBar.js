import React from "react";
import JAReactor from "../assets/JAReactor.png";

export const NavBar = () => (
    <nav className="navbar bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src={JAReactor} alt="" width={225} height={60} className="d-inline-block align-text-top" />
            </a>
        </div>
    </nav>
    )