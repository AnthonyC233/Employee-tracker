//inquirer is used for prompts in command line
const inquirer = require('inqurer');
//import library
const mysql = requre('mysql12');

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employeetracker_db'
    },
    console.log('Starting to the employeetracker_db data')
);
// Creates prompt for user
const init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Job?',
                choices: [
                    'View All Employees',
                    'Add Employee',
                    'Update Employee Role',
                    'View All Roles',
                    'Add Role',
                    'View All Departments',
                    'Add Department'
            ]
        },
    ])
// Creates command prompts to allow unique choices
    .then(res => {
        let choice = res.choice; 
        switch (choice) {
            case 'View All Employees': 
                viewEmployees(); 
                break; 
            case 'Add Employee':
                addEmployee();
                break;
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
            case 'View All Roles':
                viewAllRoles();
                break;
            case 'Add Role':
                addRole();
                break;
            case 'View All Departments':
                viewAllDepartments();
                break;
            case 'Add Department':
                addDepartment();
                break;
         }
     });
}
// functions below will control all commands for each one.

// Views employees
function viewEmployees () {
    db.query('SELECT * FROM employee', function (err,results) {
        // console.table goes in table
        console.table(results)
        init();
    });
};

function updateEmployeeRole () {

}

function viewAllRoles () {

}

function addRole () {
}

function viewAllDepartments () {

}

function addDepartment () {

}