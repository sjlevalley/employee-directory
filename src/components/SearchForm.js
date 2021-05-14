import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group formGroup">
        <label htmlFor="search"></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control searchBox"
          placeholder="Search"
          id="search"
        />
        {/* <button
          onClick={props.handleFormSubmit}
          className="btn btn-primary mt-3"
        >
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;
