// TODO: Include packages needed for this application
import fs from 'fs'
// import writeFile from "fs";
import inquirer from "inquirer";
// import prompt from "inquirer/lib/ui/prompt.js";
import { stringify } from "querystring";
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [{
		name:'title',
		type: 'input',
		message: 'What is the title of your project?',
		default(){
			return 'title'
		}
	},
	{
		name: 'description',
		type: 'input',
		message:'Please describe your project?',
		default(){
			return 'description'
		}
	},
	{
		name: 'installation',
		type: 'input',
		message: 'How do you install it?',
		default(){
			return 'installation'
		}
	},
	{
		name: 'usage',
		type: 'input',
		message: 'How do you use your project?',
		default(){
			return 'usage'
		}
	},
	{
		name: 'contributing',
		type: 'input',
		message: 'How can people contribute?',
		default(){
			return 'contributing'
		}
	},
	{
		name: 'email',
		type:'input',
		message: 'What is a good email for questions on this project?',
		default(){
			return 'email'
		}
	},
	{
		name: 'git_hub',
		type:'input',
		message: 'What is your GitHub user name?',
		default(){
			return 'gitHub'
		}
	}
];


// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt(questions)
	.then((data) => {
		writeToFile('tryREADME.md',generateMarkdown(data))
		// console.log(data.title)
		// console.log(data.description)
		// console.log(data.installation)
		// console.log(data.usage)
		// console.log(data.contributing)
		// console.log(data.email)
		// console.log(data.git_hub)
	})
}

// Function call to initialize app
init();
