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
                "Update Employee"]
                // "Quit Application"]
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
            name: "firstname",
            message: "Enter the employee's FIRST NAME: "
        },
        {
            type: "input",
            name: "lastname",
            message: "Enter the employee's LAST NAME: "
        }
    ],

    AddDepartment: [
        {
            type: "input",
            name: "name",
            message: "Enter the department's NAME: "
        }
    ],

    AddRole: [
        {
            type: "input",
            name: "title",
            message: "Enter the TITLE of the role: "
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the SALARY for the role: "

        }
    ]
}

module.exports = inquiries;