import React from "react";

function ResultList(props) {
  console.log(props);
  return (
    <div className="container-fluid">

      <table class="table">
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
          <tr>
            <td>Mark</td>
            <td>Mark Otto</td>
            <td>555-555-5555</td>
            <td>email@email.com</td>
            <td>08-31-1974</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Jacob Thornton</td>
            <td>555-555-5555</td>
            <td>email@email.com</td>
            <td>01-01-0984</td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>Larry the Bird</td>
            <td>555-555-5555</td>
            <td>email@email.com</td>
            <td>02-02-1985</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultList;
