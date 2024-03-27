INSERT INTO department (name)
VALUES ('Sales'),
('Finance'),
('Legal'),
('Engineering');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 100000, 4),
('Software Engineer', 120000, 4),
('Account Manager', 160000, 2),
('Accountant', 160000, 2),
('Legal Team Lead', 160000, 3),
('Lawyer', 160000, 3);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('John', 'Doe', 1),
('Mike', 'Chan', 2),
('Ashley', 'Rodriguez', 3),
('Kevin', 'Tupik', 4),
('Kunal', 'Singh', 5),
('Malia', 'Brown', 6),
('Sarah', 'Lourd', 7),
('Tom', 'Allen', 8);