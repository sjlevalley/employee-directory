import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid text-light jumboTron">
            <div className="container">
                <h1 className="display-4 text-center">Employee Directory</h1>
                <p className="lead text-center">Click on arrows to filter by heading or use the search box to narrow your results.</p>
                <NavLink to='/test'>View Test Page</NavLink>
            </div>
        </div>
    );
}

export default Jumbotron;
