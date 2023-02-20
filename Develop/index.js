//Included packages needed for this application
const inquirer = require("inquirer")
const fs = require ('fs')

//links of licenses
const licenses =
{
    'Apache 2.0': ['https://opensource.org/licenses/Apache-2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
    'Creative Commons Attribution-NonCommercial' : ['https://creativecommons.org/licenses/by-nc/4.0/', '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'],
    'GNU GPL v3' : ['https://www.gnu.org/licenses/gpl-3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
    'MIT' : ['https://opensource.org/licenses/MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
    'Mozilla Public License 2.0' : ['https://opensource.org/licenses/MPL-2.0', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
}

//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of the project', 
        default: "Project 0",
    },

    {
        type: 'input',
        name:'description',
        message: 'Enter project description.',
        default: 'This is a README Generator',
    },

    {
        type: 'input',
        name:'installation',
        message: 'Enter instructions for installation',
        default:'Install this app by cloning the code on Github.',
    },
    {
        type: 'input',
        name: 'credits',
        message:'List collaborators, third-party assets, references, etc.',
        default: 'The following collaborators are: ...',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
        default: 'READme file can be created by running the index.js file with through node',
    },
    {
        type: 'list',
        name:'licenses',
        message: 'Enter license',
        choices: Object.keys(licenses),
    },
    {
        type: 'input',
        name: 'badges',
        message: 'Enter badges, if any.',
        default: 'No badges for now...'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contribution guidelines',
        default: 'The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard',
    },
    {
        type: 'input',
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
        `# ${res.title}\n## Project Description\n${res.description}\n## How to install\n${res.installation}\n## Usage Information\n${res.usage}\n## Contribution Guidlines\n${res.contributions}\n## Test Instructions\n${res.tests}`,
        (err) => err ? console.error(err) : console.log('File Written!'))
}

//Function to initialize app
function init() {
    inquirer.prompt (questions)
    .then((data) => 
    {
        var res = data
        writeToFile(res)
    })
}


// Function call to initialize app
init();
