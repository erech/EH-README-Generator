//Included packages needed for this application
const inquirer = require("inquirer")
const fs = require ('fs')

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'titleQuestion',
        message: 'Enter the title of the project', 
        default: "Project 0",
    },

    {
        name:'description',
        message: 'Enter project description.',
        default: 'This is a README Generator',
    },

    {
        name:'installation',
        message: 'Enter instructions for installation',
        default:'Install this app by cloning the code on Github.',
    },
    {
        name: 'credits',
        message:'List collaborators, third-party assets, references, etc.',
        default: 'The following collaborators are: ...',
    },
    {
        name: 'usage',
        message: 'Enter usage information',
        default: 'READme file can e created by running the index.js file with through node',
    },
    {
        type: 'list',
        name:'licenses',
        message: 'Enter license',
        choices: Object.keys(licenses),
    },
    {
        name: 'badges',
        message: 'Enter badges, if any.',
        default: 'No badges for now...'
    },
    {
        name: 'contributions',
        message: 'Enter contribution guidelines',
        default: 'The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard',
    },
    {
        name:'tests',
        message: 'Include test files',
        default:'Tests to be added...',
    }
];


//Function to write README file
function writeToFile(res) {
    const fs = require ('fs')
    fs.appendFile(
        'README.md',
        `# ${res.titleQ}\n## Project Description\n${res.descriptionQ}\n## How to install\n${res.instalQ}\n## Usage Information\n${res.usageQ}\n## Contribution Guidlines\n${res.contQ}\n## Test Instructions\n${res.testQ}`,
        (err) => err ? console.error(err) : console.log('Commit logged!'))
}

//Function to initialize app
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
