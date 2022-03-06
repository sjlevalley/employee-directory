import React, { Component } from "react";
import Moment from 'react-moment';
import SearchForm from "./SearchForm";
import './style.css'
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








  render() {
    const resultsList = this.state.results.filter((employee) => {
      // get search from state
      // put search value to lowercase
      const employeeSearch = this.state.search.toLocaleLowerCase();
      // get name from employee
      // put name to lowercase
      const employeename = employee.name.first.toLocaleLowerCase();
      const employeeLastName = employee.name.last.toLocaleLowerCase();
      // if name includes search, return true
      // else if name does not include search, return false
      if (employeename.includes(employeeSearch) || employeeLastName.includes(employeeSearch)) {

        return true
      } else if (!employeename.includes(employeeSearch) || !employeeLastName.includes(employeeSearch)) {
        return false
      }
      return resultsList;

    }).map((employee) =>

      <tr key={employee.dob.date}>
        <td className="text-center"><img src={employee.picture.thumbnail} alt="employee pic"></img></td>
        <td className="text-center">{employee.name.first + " " + employee.name.last}</td>
        <td className="text-center">{employee.cell}</td>
        <td className="text-center">{employee.email}</td>
        <td className="text-center"><Moment format="DD MMMM YYYY">{employee.dob.date}</Moment></td>
      </tr>
    )

    return (
      <>
        <SearchForm search={this.state.search} handleSearchChange={this.handleSearchChange} />
        < div className="container-fluid border w-100" >
          <table className="table">
            <thead>
              <tr>
                <th data-name="image" scope="col" className="">
                  <div className=" d-flex justify-content-center align-items-center">
                    Image
                  </div>
                </th>
                <th data-name="name" scope="col" className="border" onClick={this.handleSort}  >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col d-flex justify-content-end align-items-center">
                        Name
                      </div>
                      <div className="col d-flex justify-content-start">
                        <button value="name-up-arrow" className="m-1">▲</button>
                        <button value="name-down-arrow" className="m-1">▼</button>
                      </div>
                    </div>
                  </div>
                </th>
                <th data-name="phone" scope="col">
                  <div className=" d-flex justify-content-center align-items-center">
                    Phone
                  </div>
                </th>
                <th data-name="email" scope="col" className="border" onClick={this.handleSort}  >
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col d-flex justify-content-end align-items-center">
                        Email
                      </div>
                      <div className="col d-flex justify-content-start">
                        <button value="name-up-arrow" className="m-1">▲</button>
                        <button value="name-down-arrow" className="m-1">▼</button>
                        {/* <FontAwesomeIcon icon={faSort} /> */}
                      </div>
                    </div>
                  </div>
                </th>
                <th data-name="dob" scope="col" className="border" onClick={this.handleSort}>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col d-flex justify-content-end align-items-center">
                        Date of Birth
                      </div>
                      <div className="col d-flex justify-content-start">
                        <button value="dob-up-arrow" className="m-1">▲</button>
                        <button value="dob-down-arrow" className="m-1">▼</button>
                        {/* <FontAwesomeIcon icon={faSort} /> */}
                      </div>
                    </div>
                  </div>
                </th>
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
