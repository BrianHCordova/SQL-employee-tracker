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
VALUES ('John Doe', 100000, 1),
('Mike Chan', 80000, 2),
('Ashley Rodriguez', 100000, 3),
('Kevin Tupik', 120000, 4),
('Kunal Singh', 160000, 5),
('Malia Brown', 125000, 6),
('Sarah Lourd', 250000, 7),
('Tom Allen', 190000, 8);