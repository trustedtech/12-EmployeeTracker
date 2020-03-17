const inquireQs = {
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
    ]
}

module.exports = inquireQs;