import React from 'react'
import { Table, Input, Button, Space } from 'antd'
import styled from 'styled-components'

const { Search } = Input


const StyledTable = styled(Table)`

    border: 1px solid red;
    
    .ant-table-thead > tr > th {
        background-color: #c4c4c4;
        border-bottom: 2px solid black;
        width: 10%;
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


const TestTable = ({ columns, data, checkbox, searchbar, refreshData, filterBox, filteredDataIndexes, sortedDataIndexes, searchableDataIndexes, filterSearchableDataIndexes, refreshBtn, searchBar, resetBtn }) => {

    const [sortedInfo, setSortedInfo] = React.useState({})
    const [filteredInfo, setFilteredInfo] = React.useState({})
    const [cols, setCols] = React.useState(columns)

    const [hasSelectedRowKeys, setHasSelectedRowKeys] = React.useState(false)


    React.useEffect(() => {
        if (filteredDataIndexes || filterSearchableDataIndexes || sortedDataIndexes) {
            const newCols = columns.map(c => {

                if (filterSearchableDataIndexes && filterSearchableDataIndexes.includes(c.dataIndex)) {
                    c.filteredValue = filteredInfo[c.dataIndex] || null
                }

                if (filteredDataIndexes && filteredDataIndexes.includes(c.dataIndex)) {
                    c.filteredValue = filteredInfo[c.dataIndex] || null
                }

                if (sortedDataIndexes && sortedDataIndexes.includes(c.dataIndex)) {
                    c.sortOrder = sortedInfo.columnKey === c.dataIndex && sortedInfo.order
                }

                return c

            })
            setCols(newCols)
        }
    }, [
        sortedInfo,
        filteredInfo,
        columns,
        filterSearchableDataIndexes,
        filteredDataIndexes,
        sortedDataIndexes
    ])

    const resetData = () => {
        setFilteredInfo({})
        setSortedInfo({})
    }

    const onSearch = value => {
        if (value !== '') {
            alert(value)
        }
    }

    const onFilteredSearch = value => {
        if (value === '') return resetData()
        const searchFilter = {}
        for (let i = 0; i < filterSearchableDataIndexes.length; i++) {
            const found = data.some(d => d[filterSearchableDataIndexes[i]] === value)
            if (found) {
                searchFilter[filterSearchableDataIndexes[i]] = [value]
                setFilteredInfo(searchFilter)
                break
            }
        }
    }

    const onChange = (pagination, filters, sorter, extra) => {
        if (sorter) setSortedInfo(sorter)
        if (filters) setFilteredInfo(filters)
    }

    const rowSelection = {
        type: 'checkbox',
        onChange: (selectedRowKeys, selectedRows) => {
            if (selectedRows.length > 0) {
                setHasSelectedRowKeys(true)
                console.log(selectedRowKeys)
            }
            if (selectedRows.length === 0) {
                setHasSelectedRowKeys(false)
            }
        },
        getCheckboxProps: record => ({
            name: record.name
        })
    }

    // for (let i = 0; i < data.length; i++) {
    //     // This is needed for checkbox selection functionality
    //     data[i].key = i
    // }


    return (

        <>
            {(searchbar || refreshData || filterBox || resetBtn || refreshBtn || searchableDataIndexes || filterSearchableDataIndexes) && (
                <Space style={{ marginBottom: 16 }}>
                    {resetBtn && <button>Reset Data</button>}
                    {refreshData && <button>Refresh Data</button>}
                    {searchableDataIndexes && searchableDataIndexes.length > 0 && (
                        <StyledSearch
                            allowClear
                            enterButton='Search'
                            placeholder='Enter Search Criteria...'
                            onSearch={onSearch}
                            style={{ width: 300 }}
                        />
                    )}
                    {filterSearchableDataIndexes && filterSearchableDataIndexes.length > 0 && (
                        <StyledSearch
                            allowClear
                            enterButton='Search'
                            placeholder='Enter Search Criteria...'
                            onSearch={onFilteredSearch}
                            style={{ width: 300 }}
                        />
                    )}
                </Space>
            )}
            {filterBox && (
                <StyledFilterBoxContainer>
                    <Space>
                        Icon Here
                    </Space>
                </StyledFilterBoxContainer>
            )}

            <StyledTable
                columns={cols}
                dataSource={data}
                rowClassName={(record, index) =>
                    index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
                }
                onChange={onChange}
                rowSelection={checkbox ? { ...rowSelection } : false}
                bordered
                pagination={{ pageSize: 10, showSizeChanger: false }}
            />
        </>
    )

}

export default TestTable;