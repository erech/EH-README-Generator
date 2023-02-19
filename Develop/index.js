// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require ('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'titleQuestion',
        message: 'Enter the title of the project', 
        default: "Project 0",
    },

    {
        name:'descriptQuestion',
        message: 'Enter project description.',
        default: 'This is a README Generator',
    },

    {
        name:'installQuestion',
        message: 'Enter instructions for installation',
        default:'Install this app by cloning the code on Github.',
    },
    {
        name: 'creditsQuestion',
        message:'List collaborators, third-party assets, references, etc.',
        default: 'The following collaborators are: ...',
    },
    {
        name: 'usageQuestion',
        message: 'Enter usage information',
        default: 'READme file can e created by running the index.js file with through node',
    },
    {
        name:'licenseQuestion',
        message: 'Enter license',
        default: 'If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).',
    },
    {
        name: 'badgeQuestion',
        message: 'Enter badges, if any.',
        default: 'No badges for now...'
    },
    {
        name: 'contributionQuestion',
        message: 'Enter contribution guidelines',
        default: 'The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard',
    },
    {
        name:'testQuestion',
        message: 'Include test files',
        default:'Tests to be added...',
    }
];


// TODO: Create a function to write README file
function writeToFile(res) {
    const fs = require ('fs')
    fs.appendFile(
        'README.md',
        `# ${res.titleQ}\n## Project Description\n${res.descriptionQ}\n## How to install\n${res.instalQ}\n## Usage Information\n${res.usageQ}\n## Contribution Guidlines\n${res.contQ}\n## Test Instructions\n${res.testQ}`,
        (err) => err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt (questions)
    .then((data) => {
        var res = data
        writeToFile(res)
    })
}


// Function call to initialize app
init();
