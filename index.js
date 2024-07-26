
let employee = {
name: "ebony",
streetAdress: "11 broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = { ...employee, [key]: value };
    return updatedEmployee;
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let updatedEmployee = { ...employee };
    delete employee[key];
    return employee;

} 
    


