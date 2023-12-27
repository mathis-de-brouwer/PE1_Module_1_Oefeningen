//
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});
//


let days = (parseFloat(await userInput.question(`days? `))*86400);
let hour = (parseFloat(await userInput.question(`hours? `))*3600);
let minutes = (parseFloat(await userInput.question(`minutes? `))*60);
let seconds = (parseFloat(await userInput.question(`seconds? `)));
let time = days + hour + minutes + seconds;

console.log(`secondes == ${time}`);

process.exit;


