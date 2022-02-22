import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table, Input, Button, Space } from 'antd'
import styled from 'styled-components'

const { Search } = Input


const StyledTable = styled(Table)`

    border: 1px solid red;
    
    .ant-table-thead > tr > th {
        background-color: #c4c4c4;
        border-bottom: 2px solid black;
        // width: 100%;
    }

    .ant-table-tbody > tr > td {
    
    }

    .ant-table-tbody > tr: nth-child(2n) td {
        background-color: #eeeeee
    }
`;

const StyledFilterBoxContainer = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
`;

const StyledSearch = styled(Search)`
    .ant-btn-primary {
        background-color: #469ec9;
        border-color: #469ec9;
    }
`;


const TestTable = ({ columns }) => {

    const employeeData = useSelector((state) => state.employees.employees);

    console.log(employeeData)


    return (

        <>
            <StyledTable
                columns={columns}
                dataSource={employeeData ? employeeData : []}
            // rowClassName={(record, index) =>
            //     index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            // }
            // bordered
            // pagination={{ pageSize: 10, showSizeChanger: false }}
            />
        </>
    )

}

export default TestTable;