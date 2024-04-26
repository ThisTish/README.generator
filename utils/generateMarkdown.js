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

  <!-- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) -->


## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

<!-- ## Tests
Instructions on how to run tests for your project and any test examples.-->## Questions

If you have any questions, feel free to contact me:

- GitHub: ${data.git_hub}(https://github.com/${data.git_hub})
- Email: ${data.email}

## License

<!--This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).-->
`;
}

export default generateMarkdown;
