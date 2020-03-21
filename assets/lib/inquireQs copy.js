const inquiries = {
    Entity: [
        {
            type: "list",
            name: "entity",
            message: "Which entity do you want to manage? ",
            choices: ["Employee", "Department", "Role"]
        }
    ],

    Action: [
        {
            type: "list",
            name: "action",
            message: "Which action do you want to perform? ",
            choices: ["View", "Add"]
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
        },
        {
            type: "input",
            name: "roleID",
            message: "Enter the employee's ROLE ID: "
        },
        {
            type: "input",
            name: "departmentID",
            message: "Enter the employee's DEPARTMENT ID: "
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter the employee's MANAGER ID: "
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

        },
        {
            type: "input",
            name: "departmentID",
            message: "Enter the DEPARTMENT ID for the role: "
        }
    ]
}

module.exports = inquiries;