    let url ="https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Berry-Pie-4-2.jpg"

function getUserName(){
    let userName = prompt ("Please enter your name: "); 
    console.log(userName); 
    document.write('<h2>' + userName + '</h2>'); 
    return userName;
}

function getUserAnswer(){
    let userAnswer = prompt ("Do you like pie?"); 
    console.log(userAnswer); 
    if (userAnswer.toLowerCase() == 'yes') {
        document.write('<h3>We are glad you are here!</h3>');
        document.write('<img src="' + url + '"/>')
    } else {
        document.write('<h3>Maybe you will change your mind after reading <a href="https://www.foodandwine.com/desserts/pies/five-reasons-why-pie-best">this</a>!');
    }
}

function getDessertAnswer(){
    let dessertAnswer = prompt("Is pie your favorite dessert?"); 
    if (dessertAnswer.toLowerCase() == 'yes'){
        document.write ('<h3>Secret Pie Menu</h3>');
        document.write ('<ul style="list-style-type:none"><li>Pie Flavor 1</li><li>Pie Flavor 2</li></ul>')
    } 
}

if (confirm("Please select 'ok' to continue to our website")) {
    Text = "Confirmed!"; 
} else {
    Text = "You pressed cancel!"; 
}

// function userGuessingGame(){
//     correctAnswer = 10; 
//     userAttempts = 5; 
//     for(let i = 0; i < userAttempts; i++){
//         let userGuess = prompt("Please enter a number between 1 and 20");
//         while(userGuess < 1 || userGuess > 20){
//             userGuess = prompt("Incorrect range - please enter a number between 1 and 20");
//         }
//         if (userGuess == correctAnswer){
//             alert('Correct!');
//             break;
//         } else if(userGuess < correctAnswer){
//             alert('Too low - try again')
//         } else if (userGuess> correctAnswer){
//             alert('Too high - try again')
//         } else {
//             alert('Something else went wrong'); 
//         }
//         if (i == userAttempts - 1){
//             alert('You did not guess the correct answer. The correct answer is ' + correctAnswer); 
//         }
//     }
// }

// userGuessingGame();

function piePicture(){
    let numberOfPie = prompt('How many pies would you like to see?')
    for(let i = 0; i < numberOfPie; i ++){
        document.write('<img src="' + url + '" >')
        document.write('Pie picture number ' + (i + 1))
    }
}
