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

inquirer.prompt(inquireQs.Entity)
   .then(function(answer){
      const entity = answer.entity;
      inquirer.prompt(inquireQs.Action)
      .then(function(answer, entity){
         const action = answer.action;
         const operation = Object.assign(entity, action);
         console.log(operation);
      });
   });
//runOperation(operation);
});


// //Uses inquirer to ask questions and set the chosen operation
// async function setOperation(theQs) {
//    try {

//       //Asks questions to determine operation
//       const entityObj = await inquirer.prompt(theQs.Entity);
//          if ( entityObj.entity === "Employee" ){ 
//             theQs.Action[0].choices.push('Update'); 
//          }
//       const actionObj = await inquirer.prompt(theQs.Action);
//       const operation = Object.assign(entityObj, actionObj);
//       // console.log(operation);

//       return operation;        
//    }

//    catch (err) {
//       console.log(err);
//    }
// }

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
   const query = "SELECT * FROM employees";
   connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res);
      });
   
   // askContinue();
}

// function viewDepartments() {
//    console.log('View Departments >>');

//    // askContinue();
// }

// function viewRoles() {
//    console.log('View Roles >>');

//    // askContinue();
// }

// function addEmployee() {
//    console.log('Add Employee >>');
   
//    // askContinue();
// }

// function addDepartment() {
//    console.log('Add Department >>');

//    // askContinue();
// }

// function addRole() {
//    console.log('Add Role >>');

//    // askContinue();
// }

// function updateEmployee() {
//    console.log('Update Employee >>');
// }   
   
// // function askContinue() {
// //    inquirer.prompt(inquireQs.Continue)
// //    .then(function(res){
// //       console.log(res.Continue);
// //       // if ( res.Continue == 'Yes') {
// //       //    setOperation(); 
// //       // }
// //       // else {
// //       //    connection.end;
// //       //    return;
// //       // }  
// //    });
// // }