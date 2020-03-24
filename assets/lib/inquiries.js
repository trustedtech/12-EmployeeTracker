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
                "Drop Employee",
                "Drop Role",
                "Drop Department",
                "Update Employee",
                "[-Exit Application-]"]
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
    ],

    DropEmployee: [
        {
            type: "list",
            name: "id",
            message: "Select which employee to DELETE: ",
            choices: []
        },
        {
            type: "confirm",
            name: "confirm",
            message: "**IMPORTANT**>> If this employee is a MANAGER, deleting results in all subordinate employees having no manager.\nAre you sure you want to DELETE this employee?? ",
        }
    ],

    DropRole: [
        {
            type: "list",
            name: "id",
            message: "Select which role to DELETE: ",
            choices: []
        },
        {
            type: "confirm",
            name: "confirm",
            message: "**IMPORTANT**>> Deleting a ROLE results in all assocaited employees having no role.\nAre you sure you want to DELETE this role?? ",
        }

    ],

    DropDepartment: [
        {
            type: "list",
            name: "id",
            message: "Select which department to DELETE: ",
            choices: []
        },
        {
            type: "confirm",
            name: "confirm",
            message: "**IMPORTANT**>> Deleting a DEPARTMENT also deletes all associated ROLES.\nAre you sure you want to DELETE this department?? ",
        }

    ],

    UpdateEmployee: [
        {
            type: "list",
            name: "id",
            message: "Select which employee to UPDATE: ",
            choices: []
        },
        {
            type: "list",
            name: "roles_id",
            message: "Select the new ROLE for this employee: ",
            choices: []
        },
        {
            type: "list",
            name: "manager_id",
            message: "Select the new MANAGER for this employee: ",
            choices: []
        },
    ]

}

module.exports = inquiries;