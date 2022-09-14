// link to html page
const generateHTML = require('./src/genHTML');

// profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// modules links
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the manager's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log ("Enter the manager's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Manager's email.",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ("Enter the managers email")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "Manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the managers office number")
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNum } = managerInput; 
        const manager = new Manager (name, id, email, officeNum);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

// employee prompts
const addEmployee = () => {
    console.log(`Adding employees`);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose the employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Employees name", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Employee's ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the employee's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Employee's email",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ('Enter the employees email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Employee's github username",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter the employee's github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter the intern's school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more members?',
            default: false
        }
    ])

    // employee info
    .then(employeeInfo => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeInfo; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// generates html page  
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Success! Check your index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });