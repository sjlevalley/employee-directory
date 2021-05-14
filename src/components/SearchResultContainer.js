import React, { Component } from "react";
import Moment from 'react-moment';
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
// import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  async componentDidMount() {
    const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
    const response = await fetch(BASEURL);
    const employeesList = await response.json();
    this.setState({ results: employeesList.results })
    console.log(this.state.results)
  }



  render() {
    const resultsList = this.state.results.map((employee) =>
      <tr>
        <td><img src={employee.picture.thumbnail} alt="employee pic"></img></td>
        <td>{employee.name.first + " " + employee.name.last}</td>
        <td>{employee.cell}</td>
        <td>{employee.email}</td>
        <td><Moment format="DD MMMM YYYY">{employee.dob.date}</Moment></td>
      </tr>
    )


    return (
      <>
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        < div className="container-fluid" >
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
            <tbody>
              {resultsList}
            </tbody>
          </table>

        </div >
      </>
    );
  }
}

export default SearchResultContainer;
