import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import TestTable from './TestTable';

function TestPage({ dispatch, testPageData }) {

    const employeeData = useSelector((state) => state.employees.employees);

    // const tableData = employeeData.employees.results



    const columns = [
        // {
        //     title: 'image',
        //     dataIndex: 'picture.thumbnail',
        //     key: 'picture.thumbnail',
        //     sorter: (a, b) => a.picture[2].localeCompare(b.picture[2]),
        //     onFilter: (value, record) => record.picture[2].includes(value)
        // },
        {
            title: 'Nationality',
            dataIndex: 'nat',
            key: 'nat',
            sorter: (a, b) => a.nat.localeCompare(b.nat),
            onFilter: (value, record) => record.nat.includes(value)
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
            sorter: (a, b) => a.gender.localeCompare(b.gender),
            onFilter: (value, record) => record.gender.includes(value)
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
            sorter: (a, b) => a.phone.localeCompare(b.phone),
            onFilter: (value, record) => record.phone.includes(value)
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.email.localeCompare(b.email),
            onFilter: (value, record) => record.email.includes(value)
        },
    ]

    return (
        <TestTable
            columns={columns}
        // data={tableData} // Get data from store
        />

    )
}



export default TestPage;