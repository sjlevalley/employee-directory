import React from "react";
import Box from "@mui/material/Box";
import "./style.css";


function Jumbotron() {
    return (
        <div className="jumbotron-fluid text-light jumboTronContainer">
            <Box
                sx={{
                    ml: 4,
                }}
            >
                <h1 className="display-4 text-left">Employee Directory</h1>
                <p className="lead text-left">Search your Employees!</p>
            </Box>
        </div>
    );
}

export default Jumbotron;
