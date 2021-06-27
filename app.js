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