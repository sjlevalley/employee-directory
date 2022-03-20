import React, { useState } from "react";
import { useSelector } from "react-redux";
import { renderRows, renderFiltered } from "../utils/utils";
import { DataGrid } from "@mui/x-data-grid";
import SearchBox from "./SearchBox";

function EmployeeDirectory() {
  const [searchValue, setSearchValue] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const employeeData = useSelector(
    (state) => state.employees.employees.employees?.results
  );

  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      flex: 1,
      width: 4,
    },
    {
      field: "image",
      headerName: "Image",
      headerAlign: "center",
      align: "center",
      flex: 2,
      renderCell: (params) => (
        <img style={{ borderRadius: "5px" }} src={params.value} alt="" />
      ),
    },
    {
      field: "firstName",
      headerName: "First Name",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "phone",
      headerName: "Phone",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "email",
      headerName: "Email",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "dob",
      headerName: "Date of Birth",
      headerAlign: "center",
      align: "center",
      flex: 4,
    },
    {
      field: "nationality",
      headerName: "Nationality",
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
  ];

  let employeesArray = [];
  renderRows(employeeData, employeesArray);

  React.useEffect(() => {
    renderFiltered(searchValue, employeesArray, employeeData, setFilteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, employeeData]);

  return (
    <>
      <div style={{ height: 800, width: "100%" }}>
        <SearchBox setSearchValue={setSearchValue} />
        <DataGrid
          rowHeight={80}
          rows={filteredData?.length > 0 ? filteredData : employeesArray}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          sx={{
            boxShadow: 2,
            m: 4,
            mt: 2,
            p: 2,
            border: 2,
            borderColor: "grey.400",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
          }}
        />
      </div>
    </>
  );
}

export default EmployeeDirectory;
