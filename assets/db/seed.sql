USE employees_DB;

INSERT INTO departments (id, name)
VALUES 
    (1,"Administration"),
    (2,"Production"),
    (3,"Sales"),
    (4,"Service");

INSERT INTO roles (id, title, salary, departments_id)
VALUES 
    (1,"President",85000,1),
    (4,"Product Tech",55000,2),
    (2,"Sales Manager",70000,3),
    (5,"Sales Agent",50000,3),
    (3,"Service Manager",60000,4),
    (6,"Service Agent",45000,4);

INSERT INTO employees (id, first_name, last_name, roles_id, manager_id)
VALUES
    (1,"Bob", "Bobson", 1, null),
    (2,"Ted", "Teddy", 2, 1),
    (3,"Allie", "Allison", 5, 2),
    (4,"Jim", "Jimmies", 3, 1),
    (5,"Todd", "Toddson", 6, 4),
    (6,"Steve", "Stevens", 4, 1),
    (7,"Paul", "Paulson", 4, 1);