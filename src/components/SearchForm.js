import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group formGroup">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleSearchChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control searchBox"
          placeholder="Enter Search Here..."
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
