import React from "react";

function ResultList(props) {
  return (

    <div className="container-fluid">
      <table className="table">
        <tbody>
          <tr>
            <td>Larry</td>
            <td>{props.name} </td>
            <td>{props.cell}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ResultList;
