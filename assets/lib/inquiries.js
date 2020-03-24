const inquiries = {
    Action: [
        {
            type: "list",
            name: "action",
            message: "Which action do you want to perform? ",
            pageSize: 12,
            choices: [
                "View Employees",
                "View Departments",
                "View Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee",
                "[-Exit Application-]"]
            }
    ],

    Continue: [
        {
            type: "confirm",
            name: "continue",
            message: "Do you want to perform another operation? ",
            default: false
        }
    ],

    AddEmployee: [
        {
            type: "input",
            name: "first_name",
            message: "Enter the employee's FIRST NAME: "
        },
        {
            type: "input",
            name: "last_name",
            message: "Enter the employee's LAST NAME: "
        },
        {
            type: "list",
            name: "roles_id",
            message: "Select the ROLE for this employee: ",
            choices: []
        },
        {
            type: "list",
            name: "manager_id",
            message: "Select the MANAGER for this employee: ",
            choices: []
        }
    ],

    AddRole: [
        {
            type: "input",
            name: "title",
            message: "Enter the TITLE of this role: "
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the SALARY for this role: "

        },
        {
            type: "list",
            name: "departments_id",
            message: "Select the DEPARTMENT for this role: ",
            choices: []
        }

    ],

    AddDepartment: [
        {
            type: "input",
            name: "name",
            message: "Enter the NAME of this department: "
        }
    ]
}

module.exports = inquiries;