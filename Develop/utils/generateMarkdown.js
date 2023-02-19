//links of licenses
const licenses =
{
    'Apache 2.0': ['https://opensource.org/licenses/Apache-2.0', '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'],
    'Creative Commons Attribution-NonCommercial' : ['https://creativecommons.org/licenses/by-nc/4.0/', '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'],
    'GNU GPL v3' : ['https://www.gnu.org/licenses/gpl-3.0', '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'],
    'MIT' : ['https://opensource.org/licenses/MIT', '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'],
    'Mozilla Public License 2.0' : ['https://opensource.org/licenses/MPL-2.0', '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'],
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
