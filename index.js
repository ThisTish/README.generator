// TODO: Include packages needed for this application
// import { title } from 'process';
// import { type } from 'os';

import fs from 'fs'
import writeFile from "fs";
import inquirer from "inquirer";
import prompt from "inquirer/lib/ui/prompt.js";
import { stringify } from "querystring";


// import generateMarkdown from "./utils/generateMarkdown.js";
// import(generateMarkdown)

// TODO: Create an array of questions for user input
const questions = [{
		name:'project_title',
		type: 'input',
		message: 'What is the title of your project?',
		default(){
			return 'title'
		}
	},
	{
		name: 'project_description',
		type: 'input',
		message:'Please describe your project?',
		default(){
			return 'description'
		}
	},
	{
		name: 'project_installation',
		type: 'input',
		message: 'How do you install it?',
		default(){
			return 'installation'
		}
	},
	{
		name: 'project_usage',
		type: 'input',
		message: 'How do you use your project?',
		default(){
			return 'usage'
		}
	},
	{
		name: 'project_contributions',
		type: 'input',
		message: 'Please list contributing elements?',
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
	fs.writeFile('fileName', JSON.stringify(data, null), (err) =>{
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
	// inquirer.prompt(questions)
	// .then((answers) =>{
	// 	console.log(answers)
	// })
	inquirer.prompt(questions)
	.then((answers) => {
		writeToFile('newREADME.md',answers)
	})
}

// Function call to initialize app
init();
