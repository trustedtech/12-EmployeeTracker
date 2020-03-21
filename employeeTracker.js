const mysql = require('mysql');
const inquirer = require('inquirer');
const inquiries = require('./assets/lib/inquiries.js');

const employeeTableHeader = 'Name'+'\t\t\t'+'Role'+'\t\t\t'+'Salary'+'\t\t'+'Department';
const rolesTableHeader = 'Role'+'\t\t\t'+'Salary'+'\t\t'+'Department';
const horizontalRule = '---------------------------------------------------------------------------';
let repeat = true;

const connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "password",
   database: "employees_DB"
});


//Main execution
connection.connect(function(err) {
   if (err) throw err;
   runOperation();
   })
   // connection.end();
;

function runOperation() {
   console.log('\n');
   inquirer.prompt(inquiries.Action)
      .then(function(choice){
         // console.log(choice);
         switch(choice.action) {

            case "View Employees":
               viewEmployees();
               break;

            case "View Departments":
               viewDepartments();
               break;

            case "View Roles":
               viewRoles();
               break;

            case "Add Employee":
               addEmployee();
               break;

            case "Add Department":
               addDepartment();
               break;

            case "Add Role":
               addRole();
               break;

            case "Update Employee":
               updateEmployee();
               break;

            case "Quit Application":
               repeat = false;
               break;

            default:
               console.log('Nothing matched');
               break;
         }
         
         return;
      })
      .catch(function(err) {
         if (err) throw err;
      })
   ;
}

function viewEmployees() {
   const query = "SELECT employees.first_name, employees.last_name, roles.title, roles.salary, departments.name FROM employees LEFT JOIN roles ON (employees.roles_id = roles.id) LEFT JOIN departments on (roles.departments_id = departments.id) ORDER BY employees.first_name";
   connection.query(query, function(err, res) {
      if (err) throw err;
   
      console.log('\nView Employees >>\n');
      console.log(employeeTableHeader+'\n'+horizontalRule);
      res.forEach(function(item) {
         const {first_name, last_name, title, salary, name} = item;
         console.log(first_name + '\t' + last_name + '\t\t'+ title+ '\t\t'+ salary+ '\t\t'+ name);
      });
      console.log('\n');
   
      runOperation();
   });      
}

function viewRoles() {
   const query = "SELECT roles.title, roles.salary, departments.name FROM roles LEFT JOIN departments ON (roles.departments_id = departments.id) ORDER BY departments.name";
   connection.query(query, function(err, res) {
      if (err) throw err;   
   
      console.log('\nView Roles >>\n');
      console.log(rolesTableHeader+'\n'+horizontalRule);
      res.forEach(function(item) {
         const {title, salary, name} = item;
         console.log(title+'\t\t'+salary+'\t\t'+name);
      });
      console.log('\n');

      runOperation();
   });
}

function viewDepartments() {
   const query = "SELECT name FROM departments";
   connection.query(query, function(err, res) {
      if (err) throw err; 

      console.log('\nView Departments >>\n');
      console.log('Departments\n'+horizontalRule);
      res.forEach(function(item) {
         console.log(item.name);
      });
      console.log('\n');
   
      runOperation();
   });
}

async function addEmployee() {
   try {
      console.log('\nAdd Employee >>\n');

      const newEmployee = await inquirer.prompt(inquiries.AddEmployee);

      connection.query("SELECT title FROM roles", function(err, data) {
         if (err) throw err;
         // console.log(res);
         const roleList = [];
         data.forEach(function(item, index){
            roleList[index] = item.title;
         });
         inquirer.prompt({
            type: "list",
            name: "role",
            message: "Select the employee's ROLE: ",
            choices: roleList
         }).then(function(res) {
            newEmployee.role = res.role;
         });
         })
      });

      connection.query("SELECT first_name, last_name FROM employees", function(err, data){
         if (err) throw err;
         // console.log(mgrList);
         const mgrList = [];
         data.forEach(function(item, index){
            let fullname = item.first_name + " " + item.last_name;
            mgrList[index] = fullname;
         });
         mgrList.push('None');

         inquirer.prompt({
            type: "list",
            name: "manager",
            message: "Select the employee's MANAGER: ",
            choices: mgrList
         }).then(function(res) {
            newEmployee.manager = res.manager;
         });
      });

      console.log(newEmployee);

      // {
      //    type: "list",
      //    name: "role",
      //    message: "Select the employee's ROLE: ",
      //    choices: roles
      // },
      // {
      //    type: "list",
      //    name: "managerID",
      //    message: "Select the employee's MANAGER: ",
      //    choices: employees

      // .then(function(answer) {
      // connection.query(
      //    "INSERT INTO employees SET ?",
      //    {
      //       first_name: answer.firstname,
      //       last_name: answer.lastname,
      //       role_id: answer.roleID,
      //       department_id: answer.departmentID,
      //       manager_id: answer.managerID
      //    },
      //    function(err) {
      //       if (err) throw err;
      //       console.log("Employee added successfully.");
      //       start();
      //    }
      // );
      // });
   }
   catch (err) {
      console.log(err);
   }
}

function addDepartment() {
   console.log('\nAdd Department >>\n');

}

function addRole() {
   console.log('\nAdd Role >>\n');

}

function updateEmployee() {
   console.log('\nUpdate Employee >>\n');
}   





// {
//    type: "input",
//    name: "departmentID",
//    message: "Select the DEPARTMENT for the role: "
// }
