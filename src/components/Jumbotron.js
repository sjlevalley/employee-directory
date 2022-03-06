import React from "react";
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron-fluid text-light jumboTronContainer">
            <div className="textBox">
                <h1 className="display-4 text-left">Employee Directory</h1>
                <p className="lead text-left">Click on arrows to filter by heading or use the search box to narrow your results.</p>
            </div>
        </div>
    );
}

export default Jumbotron;
