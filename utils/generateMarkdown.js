// TODO: Create a function that returns a license badge based on which license is passed in line 17
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  try{
    console.log(`first: ${license}`)
    let licenseBadge

    switch(license){
      case "MIT License":
        licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
        break
      case "GNU(GPL v3)":
        licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        break
      case "Apache 2.0":
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break
      case "BSD 3-Clause":
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        break
      case "Creative Commons":
        licenseBadge = `[![License]( https://img.shields.io/badge/License-Creative_Commons-yellowgreen.svg)]`
        break
      case "Mozilla Public License":
        licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
        break
      case "GNU-LGPL v3":
        licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
        break
      default:
        licenseBadge = ""
    }
    console.log(`second: ${licenseBadge}`)
    return licenseBadge
  }
  catch(err){
    console.log('Error Occured during badge rendering', err)
  }
}


// TODO: Create a function that returns the license link line 17

// (https://opensource.org/licenses/MIT) link for MIT
// https://creativecommons.org/licenses/by-nc-sa/4.0/ link for creative commons
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README line 55
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // * text for creative commons
  // This work is licensed under CC BY-NC-SA 4.0. 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


${renderLicenseBadge(data.license)}


## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

<!-- ## Tests
Instructions on how to run tests for your project and any test examples.-->

## Questions

If you have any questions, feel free to contact me:

- GitHub: ${data.git_hub}(https://github.com/${data.git_hub})
- Email: ${data.email}

## License

This project is licensed under the terms of the [${data.license}](https://opensource.org/licenses/MIT).
`;
}

export default generateMarkdown;
// export renderLicenseBadge;
