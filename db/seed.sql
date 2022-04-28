USE employeetracker_db

INSERT INTO department (name)
VALUES ("Engineering"),
    ("Finance"),
    ("Legal"),
    ("Sales");

SELECT * FROM DEPARTMENT;

-- Rolls, salary and department ids.
INSERT INTO role (title, salary, department_id)
VALUES ("Lead engineer", 150000, 1),
    ("Software engineer", 120000, 1),
    ('Accountant', 125000, 2),
    ('Account Manager', 160000, 2),
    ("Legal Team Lead", 150000, 3),
    ('Lawyer', 190000, 3),
    ('Sales Lead', 100000, 4),
    ("Sales Lead", 100000, 4);


-- Random names 
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Willis", 3, NULL),
    ("Tom", "Myspace", 3, 1),
    ("Cat", "Hat", 1, 2),
    ("Barnes", "noble", 1, 2),
    ("Pikachu", "Ash", 2, 1);
     ('Bob', 'Cletus', 6, 5),
    ('Micheal', 'Jordan', 7, NULL),
    ('Brandon', 'Smith', 8, 7);

