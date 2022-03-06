import moment from 'moment'

export const renderRows = (employeeData, employeesArray) => {
    employeeData?.map((employee, index) => {
        const birthDate = moment(employee.dob.date).format('MMMM Do, YYYY');
        employeesArray.push({
            id: index,
            image: employee.picture.medium,
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

export const renderFiltered = (searchValue, rows, employeeData, setFilteredData) => {
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
                image: employee.picture.medium,
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