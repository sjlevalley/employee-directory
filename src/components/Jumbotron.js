import React from "react";


function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid bg-dark text-light border-bottom border-danger ">
            <div className="container">
                <h1 className="display-4 text-center">Employee Directory</h1>
                <p className="lead text-center">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        </div>
    );
}

export default Jumbotron;
