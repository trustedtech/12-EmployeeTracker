const db = require('../db/queries.js');
const inquirer = require('inquirer');
const inquiries = require('./inquiries');
const hr = '\n==============================================\n';

function renderData(data,tag) {
    if (tag) { console.log('\n>> ' + tag + ' >>\n'); }
    console.table(data);
    console.log(hr);
}

async function viewEmployees(tag) {
    const data = await db.getEmployeesExpanded()
    renderData(data,tag);
}

async function viewRoles(tag) {
    const data = await db.getRolesExpanded();
    renderData(data,tag);
}

async function viewDepartments(tag) {
    const data = await db.getDepartmentsTable()
    renderData(data,tag);
}

async function addEmployee() {
    const rolesTable = await db.getRolesTable();
    const employeeTable = await db.getEmployeesTable();
    const roleChoices = [];
    const managerChoices = [];

    //Builds a list of roles
    rolesTable.forEach((item, index) => {
        roleChoices[index] = { name: item.title, value: item.id }
    });

    //Builds a list of managers
    employeeTable.forEach((item, index) => {
        item.name = item.first_name + " " + item.last_name;
        managerChoices[index] = { name: item.name, value: item.id }
    });
    managerChoices.push({ name: '[-None-]', value: null });

    //Updates our inquirer prompts with current choices
    inquiries.AddEmployee[2].choices = roleChoices;
    inquiries.AddEmployee[3].choices = managerChoices;

    //Prompt user for input using inquirer with our prepared questions, choices
    const employee = await inquirer.prompt(inquiries.AddEmployee);

    await db.addEmployee(employee)
        .then(() => { console.log('\n^ Employee added successfully! ^\n')})
        .catch((error) => { console.log(error) })
    ; 
}

async function addRole() {
    const departmentsTable = await db.getDepartmentsTable();
    const departmentChoices = [];

    //Builds a list of departments
    departmentsTable.forEach((item, index) => {
        departmentChoices[index] = { name: item.name, value: item.id }
    });

    //Updates our inquirer prompt with current choices
    inquiries.AddRole[2].choices = departmentChoices;

    //Prompt user for input using inquirer with our prepared questions, choices
    const role = await inquirer.prompt(inquiries.AddRole);

    await db.addRole(role)
        .then(() => { console.log('\n^ Role added successfully! ^\n')})
        .catch((error) => { console.log(error) })
    ; 
}

async function addDepartment() {
    const department = await inquirer.prompt(inquiries.AddDepartment);

    await db.addDepartment(department)
        .then(() => { console.log('\n^ Department added successfully! ^\n')})
        .catch((error) => { console.log(error) })
}

async function updateEmployee() {

}

function quit() {
    console.log("Exiting application...");
    process.exit();
}

module.exports = {
    viewEmployees,
    viewRoles,
    viewDepartments,
    addEmployee,
    addRole,
    addDepartment,
    updateEmployee,
    quit
}