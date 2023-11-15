// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { userInfo } from 'node:os';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


// Voeg hier je eigen code in
/*
//H1 hard challenge
let dag = parseFloat(86400);
let uur = parseFloat(3600);
let minuten = parseFloat(60);
let seconden = parseFloat(1);

dag *= parseFloat(await userInput.question('Hoeveel dagen?: '));
uur *= parseFloat(await userInput.question('Hoeveel uren?: '));
minuten *= parseFloat(await userInput.question('Hoeveel minuten?: '));
seconden *= parseFloat(await userInput.question('Hoeveel seconden?: '));

console.log('Aantal seconden: ' + (dag + uur + minuten + seconden));

*/

//M2 medium challenge
/*
let geboorteJaar = parseFloat(await userInput.question('In welk jaar ben je geboren?: '));
let toekomstJaar = parseFloat(await userInput.question('Geef mij een jaar in de toekomst: '));
console.log('In ' + toekomstJaar + ' zal jij ' + (toekomstJaar - (geboorteJaar + 1)) + ' of ' + (toekomstJaar - geboorteJaar) + ' jaar oud zijn. ');
*/


//M1 medium challenge
/*
let getal1 = parseFloat(await userInput.question('Voer hier je getal in: '));
let getal2 = 34;
console.log(getal1 + getal2)
*/


//e3 ez challenge
/*
let getal1 = parseFloat(await userInput.question('Voer hier je eerste getal in: '));
getal1 += parseFloat(await userInput.question('Voer hier je tweede getal in: '));
console.log(getal1)
*/


process.exit();
