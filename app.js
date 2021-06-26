//let userName = 'Alli'

//console.log(userName)

let userName = prompt ("Please enter your name: "); 
console.log(userName); 
document.write('<h2>' + userName + '</h2>'); 

let userAnswer = prompt ("Do you like pie? "); 
console.log(userAnswer); 

if (userAnswer == 'yes') {
    document.write('<h3>We are glad you are here, ' + userName + '!');
} else {
    document.write('<h3>Maybe you will change your mind!');
}

if (confirm("Please select yes to continue to our website")) {
    Text = "Confirmed!"; 
} else {
    Text = "You pressed cancel!"; 
}