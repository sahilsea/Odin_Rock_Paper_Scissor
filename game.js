let user_score = 0;
let comp_score = 0;
function play_game() {
// User input 
prompt("To inspect Cancel all the prompt first")
let A = (prompt("Enter Your Choice : Rock or Paper or Scissor: ")).toUpperCase()
console.log(`your choice: ${A}`)

// Random number for choices
let rand_num = (Math.random()*10)
console.log(`random number : ${rand_num}`)


// Equating random numbers to choices 
if (0 <= rand_num && rand_num <= 3.33) {
    B = "ROCK"
}
else if ( 3.3 < rand_num && rand_num <= 6.66) {
    B = "PAPER"
}
else {
    B = "SCISSOR"
}
console.log(`comp choice: ${B}`)


// Compare both the inputs
if (A==B){
    console.log("Draw")
}
else if ((A=="PAPER" && B=="ROCK") || (A=="ROCK" && B=="SCISSOR") || (A=="SCISSOR" && B=="PAPER")){
    user_score = user_score + 1
    console.log(`You Win! , Your score : ${user_score}`)
} 
else {
    comp_score = comp_score + 1
    console.log(`Your Computer Wins, Computer score : ${comp_score}`)
    
}
} 

while (user_score < 5 && comp_score < 5) {
play_game()
}


if ( user_score > comp_score ) {
console.log(`You win by ${(user_score - comp_score)} Points`)
}
else {
console.log(`Your computer beat you by ${comp_score - user_score} Points`)
}
