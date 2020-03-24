const inquirer = require('inquirer');
const inquiries = require('./assets/lib/inquiries');
const run = require('./assets/lib/functions');
require('console.table');
const repeat = () => { runOperation(); }

//Main execution
console.log('\n---------------------------\nWelcome to EmployeeTracker!\n---------------------------\n')
runOperation();

function runOperation() {
   inquirer.prompt(inquiries.Action)
      .then(function(res){
         const choice = res.action;

         switch(choice) {

            case "View Employees":
               return run.viewEmployees(choice)
               .then(repeat);

            case "View Roles":
               return run.viewRoles(choice)
               .then(repeat);

            case "View Departments":
               return run.viewDepartments(choice)
               .then(repeat);

            case "Add Employee":
               return run.addEmployee(choice)
               .then(repeat);

            case "Add Department":
               return run.addDepartment(choice)
               .then(repeat);

            case "Add Role":
               return run.addRole(choice)
               .then(repeat);

            case "Update Employee":
               return run.updateEmployee(choice)
               .then(repeat);

            case "[-Exit Application-]":
            default:
               return run.quit();
         }

      })
   ;
}