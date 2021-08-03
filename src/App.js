import React, { Component } from "react";
import SearchResultContainer from "./components/SearchResultContainer";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Jumbotron />
        <SearchResultContainer />
      </div>
    )
  };
};

export default App;
