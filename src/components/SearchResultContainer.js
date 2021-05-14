import React, { Component } from "react";
import Moment from 'react-moment';
import SearchForm from "./SearchForm";
// import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  // When this component mounts, search the API for employees
  async componentDidMount() {
    const BASEURL = "https://randomuser.me/api/?results=50&nat=us";
    const response = await fetch(BASEURL);
    const employeesList = await response.json();
    this.setState({ results: employeesList.results })
  }

  searchUser = (query) => {
    API.search(query)
      .then((res) => this.setState({ results: res }))
      .catch((err) => console.log(err));
  };

  handleSearchChange = (event) => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
  };

  // 

  render() {
    const resultsList = this.state.results.filter((employee) => {
      // get search from state
      // put search value to lowercase
      const employeeSearch = this.state.search.toLocaleLowerCase();
      // get name from employee
      // put name to lowercase
      const employeeFirstName = employee.name.first.toLocaleLowerCase();
      const employeeLastName = employee.name.last.toLocaleLowerCase();
      // if name includes search, return true
      // else if name does not include search, return false
      if (employeeFirstName.includes(employeeSearch) || employeeLastName.includes(employeeSearch)) {
        return true
      } else if (!employeeFirstName.includes(employeeSearch) || !employeeLastName.includes(employeeSearch)) {
        return false
      }

    }).map((employee) =>
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

          handleSearchChange={this.handleSearchChange}
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
