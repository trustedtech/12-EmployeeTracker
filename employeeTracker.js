const mysql = require('mysql');
const inquirer = require('inquirer');
const inquireQs = require('./assets/lib/inquireQs.js');

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
   console.log("Connected as thread id " + connection.threadId);

   let repeat = true;
   // while (repeat) {
   
      setOperation(inquireQs)
      .then(function(operation) {
         runOperation(operation);
      });

   // }   
});


function askQuestion(Qs) {
   return inquirer.prompt(Qs);
}

//Uses inquirer to ask questions and set the chosen operation
async function setOperation(theQs) {
   try {

      //Asks questions to determine operation
      const entityObj = await askQuestion(theQs.Entity);
         if ( entityObj.entity === "Employee" ){ 
            theQs.Action[0].choices.push('Update'); 
         }
      const actionObj = await askQuestion(theQs.Action);
      const operation = Object.assign(entityObj, actionObj);
      // console.log(operation);

      return operation;        
   }

   catch (err) {
      console.log(err);
   }
}

//Executes the chosen operation
function runOperation(op) {
   // console.log(op.entity, op.action)

   try {
      switch(true) {

         case (op.entity == 'Employee' && op.action == 'View'):
            viewEmployees();
            break;
         
         case (op.entity == 'Employee' && op.action == 'Add'):
            addEmployee();
            break;

         case (op.entity === 'Employee' && op.action === 'Update'):
            updateEmployee();
            break;

         case (op.entity === 'Department' && op.action === 'View'):
            viewDepartments();
            break;

         case (op.entity === 'Department' && op.action === 'Add'):
            addDepartment();
            break;

         case (op.entity === 'Role' && op.action === 'View'):
            viewRoles();
            break;

         case( op.entity === 'Role' && op.action === 'Add'):
            addRole();
            break;
         default:
            console.log('Nothing matched');
            break;          
      }
   }
   catch(err) 
   { console.log(err); }
}

function viewEmployees() {
   console.log('View Employees >>');
   repeat = false;
}

function viewDepartments() {
   console.log('View Departments >>');
}

function viewRoles() {
   console.log('View Roles >>');
}

function addEmployee() {
   console.log('Add Employee >>');
}

function addDepartment() {
   console.log('Add Department >>');
}

function addRole() {
   console.log('Add Role >>');
}

function updateEmployee() {
   console.log('Update Employee >>');
}
