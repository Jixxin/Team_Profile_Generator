const inquirer = require("inquirer");
const fs = require('fs')
const {Engineer,Intern,Manager} = require("./lib/lib.js")
const Employees = []
const generateTeam = require("./util/generateHtml")

function askQuestion() {
    inquirer.prompt([
        {
            name: "question",
            type: "list",
            choices: ["Add a Manager","Add an Engineer","Add an Intern", "quit"]
        }
    ]).then(answers => {
        switch (answers.question) {
            case "Add a Manager":
                console.log("Add a Manager")
                addManager();
                break;

            case "Add an Engineer":
                console.log("Add an Engineer")
                addEngineer();
                break;

            case "Add an Intern":
                console.log("Add an Intern")
                addIntern();
                break;

            default:
                writeFile()
                console.log("Goodbye")
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
        name: "name",
        message: "What is the manager's name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is the manager's id?",
        type: "input"
    },
    {
        name: "email",
        message: "What is the manager's email?",
        type: "input"
    },
    {
        name: "officeNumber",
        message: "What is the manager's office Number?",
        type: "input"
    }
]).then(({ name,id,email,officeNumber}) => {
        console.log(name);
        const me = new Manager(name,id,email,officeNumber);
        Employees.push(me)
        console.log(Employees);
        askQuestion();
    })
}
function addEngineer() {
    inquirer.prompt([
        {
        name: "name",
        message: "What is the Engineer's name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is the Engineer's id?",
        type: "input"
    },
    {
        name: "email",
        message: "What is the Engineer's email?",
        type: "input"
    },
    {
        name: "github",
        message: "What is the Engineer's GitHub username?",
        type: "input"
    }
]).then(({ name,id,email,github}) => {
        console.log(name);
        const me = new Engineer(name,id,email,github);
        Employees.push(me)
        console.log(Employees);
        askQuestion();
    })
}
function addIntern() {
    inquirer.prompt([
        {
        name: "name",
        message: "What is the Intern's name?",
        type: "input"
    },
    {
        name: "id",
        message: "What is the Intern's id?",
        type: "input"
    },
    {
        name: "email",
        message: "What is the Intern's email?",
        type: "input"
    },
    {
        name: "school",
        message: "What school did the Intern attend?",
        type: "input"
    }
]).then(({ name,id,email,school }) => {
        console.log(name);
        const me = new Intern(name,id,email,school);
        Employees.push(me)
        console.log(Employees);
        askQuestion();
    })
}


function writeFile() {
    fs.writeFile('team.html', generateTeam(Employees), (err) =>
    err ? console.log(err) : console.log('Success!')
);
}
askQuestion()