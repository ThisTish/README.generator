const fs = require( 'fs')
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [{
		name:'title',
		type: 'input',
		message: 'What is the title of your project?',
		default: ''
		
	},
	{
		name: 'description',
		type: 'input',
		message:'Please describe your project?',
		default:''
		
	},
	{
		name: 'installation',
		type: 'input',
		message: 'How do you install it?',
		default:''
		
	},
	{
		name: 'usage',
		type: 'input',
		message: 'How do you use your project?',
		default:''
		
	},
	{
		name: 'license',
		type: 'list',
		message: 'What license would you like for your project?',
		choices: ["MIT License", "GNU(GPL v3)", "Apache 2.0", "BSD 3-Clause", "Creative Commons", "Mozilla Public License", "GNU-LGPL v3", "other"],
		default: 'MIT License'
	},
	{
		name: 'copyright',
		type: 'input',
		message: 'Who is the copyright holder?',
		default:''
		
	},
	{
		name: 'contributing',
		type: 'input',
		message: 'How can people contribute?',
		default:''
		
	},
	{
		name: 'email',
		type:'input',
		message: 'What is a good email for questions on this project?',
		default:''
		
	},
	{
		name: 'git_hub',
		type:'input',
		message: 'What is your GitHub user name?',
		default:''
		
	},
	{
		name: 'tests',
		type:'input',
		message: 'Include any tests written for this project.',
		default:''
		
	}
];

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) =>{
		if(err){
			console.log('an error occured', err)
		}
		else{
			console.log('file was written')
		}
	})
}

function init() {
	inquirer.prompt(questions)
	.then((data) => {
		writeToFile('newREADME.md',generateMarkdown(data))
	})
}

init();
