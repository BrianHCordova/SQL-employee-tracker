[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# SQL-employee-tracker

## Your Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. This assignment builds a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and PostgreSQL.

## Installation 
Download or clone the repo to your local machine. Because this application will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your projects integrated terminals folder: `npm i.` The user then must then lauch Postgres by running by running the command: `psql -U postgres` in the integrated terminal, then entering `password` for the password prompt. Continue to the terminal and run the command: `\i db/schema.sql` and then the command `\i db/seeds.sql` to initalize and see the database. Run the command `\q` to exit Postgres. Finally, the user runs the command: `node index.js` to launch the application.
* Note: `postgres` and `password` are subject to the users own User and Password linked to their postgres.  

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## License
This application is covered by the following license: MIT License

## Questions
Feel free to contact me below with any questions or suggestions:

- [Github](https://github.com/BrianHCordova)

- [Email Address](mailto:briancordova@yahoo.com)
