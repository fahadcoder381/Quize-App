#! /usr/bin/env node

import inquire from "inquirer";
import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.red("=".repeat (70)))
console.log( chalk.yellow( "  (っ◔◡◔)っ 💘♟ 𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓕𝓪𝓱𝓪𝓭 𝓬𝓸𝓭𝓮𝓻  ♢💙 (っ◔◡◔)っ" ))
console.log(chalk.red("=".repeat(70)));


const api_Link:string = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"

let fetchData = async (data: string) => {
    
    let FetchQuiz:any = await fetch(data)
    let res = await FetchQuiz.json()
    return res.results;
}

let data = await fetchData(api_Link)

 let startQuiz = async () => {
    let score:number = 0
    //for user name 
    let name = await inquire.prompt({
        type: "input",
        name: "fname",
        message: chalk.bold.yellow("What is Your Name ?")
    })

    for(let i=1; i<=5; i++){
        let answers = [...data [i].incorrect_answers,data[i].correct_answer];

        let ans = await inquirer.prompt({
            type: "list",
            name: "quiz",
            message: data[i].question,
            choices: answers.map((val:any)=> val)
        })
        if (ans.quiz == data[i].correct_answer){
            ++score
            console.log(chalk.bold.italic.yellow.green("Correct"));
            
        }
        else {
            console.log(`Correct answer is ${chalk.bold.italic.red(data[i].correct_answer)}`);
            
        }
    }
    console.log(`Dear ${chalk.green.bold(name.fname)}, your score is ${chalk.green.bold(score)} out of ${chalk.yellow.bold('5')}`);
    
 };

startQuiz()
 




























