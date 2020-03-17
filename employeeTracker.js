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
   while (repeat) {
   
      setOperation()
      .then(function(operation) {
         runOperation(operation);
      });

   }   
});


//Uses inquirer to ask questions and set the chosen operation
async function setOperation() {
   try {
      const operation = {};
      let actionQs = inquireQs.Action;

      //Asks questions to determine operation
      operation.entity = await askQuestion(inquireQs.Entity);
         if ( entity = "Employee" ) 
            { actionQs = inquireQs.Action[0].choices.push('Update'); }

      operation.action = await askQuestion(actionQs);

      return operation;        
   }

   catch (err) {
      console.log(err);
   }
}


function askQuestion(Qs) {
   return inquirer.prompt(Qs);
}


//Executes the chosen operation
function runOperation(operation) {

   try {
      switch(true) {

         case({entity} === 'Employee' && {action} === 'View'):
            viewEmployees();
            break;
         
         case({entity} === 'Employee' && {action} === 'Add'):
            addEmployee();
            break;

         case({entity} === 'Employee' && {action} === 'Update'):
            updateEmployee();
            break;

         case({entity} === 'Department' && {action} === 'View'):
            viewDepartments();
            break;

         case({entity} === 'Department' && {action} === 'Add'):
            addDepartment();
            break;

         case({entity} === 'Role' && {action} === 'View'):
            viewRoles();
            break;

         case({entity} === 'Role' && {action} === 'Add'):
            addRole();
            break;
            
      }
   }
   catch(err) 
   { console.log(err); }
}

function viewEmployees() {

}

function viewDepartments() {

}

function viewRoles() {

}

function addEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function updateEmployee() {

}