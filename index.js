const inquirer = require('inquirer');
const fs = require('fs');
// name location, bio, linkedIn, GitHub
function init() {
    inquirer
        .prompt([{
                type: 'input',
                message: "Enter the name of the project.",
                name: "projectName"
            },
            {
                type: 'input',
                message: "Enter a description of the project",
                name: "projectDescription"
            },
            {
                type: 'input',
                message: "Provide installation instructions",
                name: "projectInstall"
            },
            {
                type: 'input',
                message: "Enter your github repository link.",
                name: "githubRepo"
            },
            {
                type: 'input',
                message: "Enter your email address",
                name: "projectEmail"
            }
        ])
        .then(response => {
            let html = `# ${response.projectName}
## Description of project
${response.projectDescription}
## Installation instructions
${response.projectInstall}
## GitHub repository link
${response.githubRepo}
## eMail address
${response.projectEmail}
`
            fs.writeFile('README.md', html, (err) =>
                err ? console.error(err) : console.log('Success!'))
        })
}
init();