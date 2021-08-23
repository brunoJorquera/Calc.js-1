console.log("Hackerman") 

const firstName = "Bruno";
let age = 21;
age = 22;
console.log(firstName, age);

let favRobot = 'Optimus Prime';
let favColor = `Red`;
//concatenate strings with +
console.log("Hello my name is " + firstName)
//cpmcat wotj template literal
console.log(`I am ${age} years old`)

const isCool = true;

let powerLevel;
let weaknesses = null;
console.log(powerLevel);

if (favRobot = "Optimus Prime"){
    console.log("That's my favorite too!")
} else {
    console.log("That's okay we can still be friends...")
}

if (age > 99){
    console.log("Take away his driver's license")
} else {
    console.log("Move Along")
} 
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Enter a number to see if it's Bruno's favorite:", function(answer){
    if(answer === 12){
        console.log("That's Bruno's favorite number!")
    } else {
        console.log("Thanks for playing")
    }
    reader.close()
});
