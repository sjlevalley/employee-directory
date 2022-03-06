import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function TestPage() {

    const [searchValue, setSearchValue] = useState(null)
    const [filteredData, setFilteredData] = useState(null)
    const employeeData = useSelector((state) => state.employees.employees.employees.results);

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        },
        {
            field: 'image',
            headerName: 'Image',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
            renderCell: (params) => <img style={{ borderRadius: '5px' }} src={params.value} alt='' />
        },
        {
            field: 'firstName',
            headerName: 'First Name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

        },
        {
            field: 'lastName',
            headerName: 'Last Name',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

        },
        {
            field: 'phone',
            headerName: 'Phone',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

        },
        {
            field: 'email',
            headerName: 'Email',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

        },
        {
            field: 'dob',
            headerName: 'Date of Birth',
            headerAlign: 'center',
            align: 'center',
            flex: 1,

        },
        {
            field: 'nationality',
            headerName: 'Nationality',
            headerAlign: 'center',
            align: 'center',
            flex: 1,
        }
    ];

    let employeesArray = []
    const renderRows = () => {
        employeeData.map((employee, index) => {
            const birthDate = moment(employee.dob.date).format('MMMM Do, YYYY');
            employeesArray.push({
                id: index,
                image: employee.picture.large,
                firstName: employee.name.first,
                lastName: employee.name.last,
                name: `${employee.name.first} ${employee.name.last}`,
                phone: employee.phone,
                email: employee.email,
                dob: birthDate,
                nationality: employee.nat
            })
        })
    }
    renderRows()

    const rows = employeesArray



    React.useEffect(() => {
        const renderFiltered = () => {
            let newArray = []
            if (searchValue === null || searchValue === '') {
                newArray = rows
            } else {
                const filteredEmployees = employeeData.filter((employee) => {
                    const employeeSearch = searchValue?.toLowerCase()
                    if (
                        employee.name.first.toLowerCase().includes(employeeSearch) ||
                        employee.name.last.toLowerCase().includes(employeeSearch) ||
                        employee.email.toLowerCase().includes(employeeSearch) ||
                        employee.phone.toLowerCase().includes(employeeSearch) ||
                        employee.dob.date.toLowerCase().includes(employeeSearch) ||
                        employee.nat.toLowerCase().includes(employeeSearch)
                    ) { return true }
                    return false
                })
                filteredEmployees.map((employee, index) => {
                    const birthDate = moment(employee.dob.date).format('MMMM Do, YYYY');
                    newArray.push({
                        id: index,
                        image: employee.picture.large,
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        name: `${employee.name.first} ${employee.name.last}`,
                        phone: employee.phone,
                        email: employee.email,
                        dob: birthDate,
                        nationality: employee.nat
                    })
                })
            }
            setFilteredData(() => newArray)
        }
        renderFiltered()
    }, [searchValue])


    return (
        <>
            <div style={{ height: 800, width: '100%' }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 2, width: '50ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Search Employees..."
                        variant="outlined"
                        onChange={(e) => setSearchValue(() => e.target.value)}
                    />
                </Box>
                <DataGrid
                    rowHeight={150}
                    rows={filteredData}
                    columns={columns}
                    pageSize={25}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    sx={{
                        boxShadow: 2,

                        p: 2,
                        border: 2,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        },
                    }}
                />
            </div>
        </>
    )
}





export default TestPage;