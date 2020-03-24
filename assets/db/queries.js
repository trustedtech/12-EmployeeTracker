const util = require("util");
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employees_DB"
});

connection.connect();

connection.query = util.promisify(connection.query);


class Database {
    //Establishes a reference to the instance of 'Database.connection' at the moment it is instatiated
    constructor(connection) {
        this.connection = connection;
    }
    //Converts our 'query' and 'close' methods into Promises so we can (1) pass values back to the caller function and (2) perform sequential queries using '.then()' if needed.
    // query(sql, args) {
    //     return new Promise ((resolve, reject) => {
    //         this.connection.query(sql, args, (err,rows) => {
    //             if (err)
    //                 return reject(err);
    //             resolve(rows);
    //         });
    //     });
    // }
    // close() {
    //     return new Promise ((resolve, reject) => {
    //         this.connection.end(err => {
    //             if (err)
    //                 return reject(err);
    //             resolve();
    //         });
    //     });
    // }

    //Define methods that utilize this database connection and provide functionality to the application
    getEmployeesExpanded() {
        return this.connection.query("SELECT employees.first_name, employees.last_name, roles.title, departments.name AS department, salary FROM employees LEFT JOIN roles ON (employees.roles_id = roles.id) LEFT JOIN departments on (roles.departments_id = departments.id) ORDER BY employees.last_name");
    }

    getRolesExpanded() {
        return this.connection.query("SELECT roles.title, roles.salary, departments.name FROM roles LEFT JOIN departments ON (roles.departments_id = departments.id) ORDER BY departments.name");
    }

    getEmployeesTable() {
        return this.connection.query("SELECT * FROM employees");
    }

    getRolesTable() {
        return this.connection.query("SELECT * FROM roles");
    }

    getDepartmentsTable() {
        return this.connection.query("SELECT * FROM departments");
    }

    addEmployee(employee) {
        return this.connection.query("INSERT INTO employees SET ?", employee);
    }

    addRole(role) {
        return this.connection.query("INSERT INTO roles SET ?", role);
    }

    addDepartment(department) {
        return this.connection.query("INSERT INTO departments SET ?", department);
    }

    dropEmployee(employeeID) {
        return this.connection.query("DELETE FROM employees WHERE id = ?", employeeID);
    }

    dropRole(roleID) {
        return this.connection.query("DELETE FROM roles WHERE id = ?", roleID);
    }

    dropDepartment(departmentID) {
        return this.connection.query("DELETE FROM departments WHERE id = ?", departmentID);
    }

    updateEmployee(updates, employeeID) {
        return this.connection.query("UPDATE employees SET ? WHERE ?", [updates, employeeID]);
    }
}

module.exports = new Database(connection);
