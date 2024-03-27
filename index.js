const inquirer = require('inquirer');
const { Pool } = require('pg');

const employee_db = new Pool(
    {
        user:"postgres",
        password:"password",
        host:"localhost",
        database:"employee_db"
    },
)

// function mainFunction(){
inquirer
.prompt([
    {
        type: 'list',
        message: "What would you like to do?",
        choices: [
            'View All Employees:', 
            'Add Employee:', 
            'Update Employee Role:', 
            'View All Roles:', 
            'Add Role:',
            'View All Departments:',
            'Add Department:',
            'Quit'
        ],
        name: 'selections',
    },
])
.then((data) => {
    let tracker
    if (data.selections==='View All Employees:'){
        tracker = employeeTable()
    }else if (data.selections==='Add Employee:'){
        tracker = addEmployee()
    } else if (data.selections==='Update Employee Role:'){
        tracker = updateEmployeeRole()
    } else if (data.selections==='View All Roles:'){
        tracker = viewRole()
    } else if (data.selections==='Add Role:'){
        tracker = addRole()
    } else if (data.selections==='View All Departments:'){
        tracker = departmentTable()
    } else if (data.selections==='Add Department:'){
        tracker = addDepartment()
    } else if (data.selections==='Quit'){
        return ('Thank you for playing.')
    }  
});
function addEmployee(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Employees First Name:',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'Enter Employee Last Name:',
            name: 'lastName'
        },
        {
            type: 'list',
            message: 'What is the Employees Role?',
            choices: [
                'Sales Lead', 
                'Slaesperson', 
                'Lead Engineer', 
                'Software Engineer', 
                'Account Manager', 
                'Accountant', 
                'Legal Team Lead', 
                'Lawyer'
            ],
            name: 'employeeRole'
        }
    ])
    .then ((data) =>{
        employee_db.query('INSERT INTO employee(first_name, last_name, role_id)VALUES($1, $2, $3)', [data.firstName, data.lastName, '1'])
        // mainFunction()
    })
};
function employeeTable(){
    employee_db.query('SELECT * FROM employee', (err, {rows}) =>{
        if (err) {
            console.log(err);
        }
        console.table(rows);
        // mainFunction()
    })
}

function addRole(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Add a role:',
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is the salary for this role?',
            name: 'salary'
        },
        {
            type: 'list',
            message: 'What department will this be connected to?',
            choices: ['Sales', 'Finance', 'Legal', 'Engineering'],
            name: 'department'
        }
    ])
    .then ((data) =>{
        employee_db.query('INSERT INTO role(title, salary, department_id)VALUES($1, $2, $3)', [data.role, data.salary, '1'])
        // mainFunction()
    })
}
function viewRole(){
    employee_db.query('SELECT * FROM role', (err, {rows}) =>{
        if (err) {
            console.log(err);
        }
        console.table(rows);
        // mainFunction()
    })
}

function addDepartment(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What department will you be adding to?',
            name: 'department'
        },
    ])
    .then ((data) =>{
        employee_db.query('INSERT INTO department (name) VALUES($1)', [data.dapartment])
        // mainFunction()
    })
};
function departmentTable(){
    employee_db.query('SELECT * FROM department', (err, {rows}) =>{
        if (err) {
            console.log(err);
        }
        console.table(rows);
        // mainFunction()
    })
}