import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../auth/AuthContext";

export const Navbar = () => {

    const {user: {name}} = useContext(AuthContext)
    console.log(name);
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            Asociaciones
            </Link>

            <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvel"
                >
                Marvel
                </NavLink>

                <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
                >
                DC
                </NavLink>
                <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/search"
                >
                Search
                </NavLink>
            </div>
            </div>

            <div className="d-flex">
            <ul className="navbar-nav ml-auto">
                <span className="nav-item nav-link text-info">{name}</span>
                <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/login"
                >
                Logout
                </NavLink>
            </ul>
            </div>
        </div>
        </nav>
    );
};
