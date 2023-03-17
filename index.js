// Write your solution in this file!
const employee = {
    name: "John",
    streetAddress: "100 Spooner Street" 
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee1 = {...employee}
    delete newEmployee1[key]
    return newEmployee1
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}