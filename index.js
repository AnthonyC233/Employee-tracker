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

const init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'What would you like?',
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
}
