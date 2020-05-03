//Challenge 1: Your age in days.container-1

function ageInDays(){
    var birthYear = prompt('What year where you born');                                     //Prompt user for year of birth
    var ageInDaysResult = (2020 - birthYear) * 365;                                         //Calculate days
    var h1 = document.createElement('h1');                                                  //Creating a new element call h1
    var textAnswer = document.createTextNode('You are ' + ageInDaysResult + ' days old.')   //populating var textAnswer with results
    h1.setAttribute('id','ageInDays');                                                      //Setting h1 tag id to ageInDays
    h1.appendChild(textAnswer);                                                             //Adding textAnswer to h1
    document.getElementById('flex-box-result').appendChild(h1);                             //adding the h1 tag to the flex-box-result
}

function reSet(){
    document.getElementById('ageInDays').remove(); //Reset age in days
}

//Challenge 2: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    console.log(yourChoice)
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice', botChoice);

    results = decidewinner(humanChoice, botChoice) //Function to figure out who won and put result in var results.
    console.log(results);

    message = finalMessage(results) //You won or lost message
    console.log(message)

    rpsFrontEnd(yourChoice.id, botChoice, message); //display results on page.
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3); //function to get random number between 0, 1 and 2.
}

function numberToChoice(number) {
    return ['Rock','Paper','Scissors'][number]; //Takes a number and asigns it r, p , s.
}

function decidewinner(yourChoice, computerChoice){
    var rpsDatabase = { //Create a database of results. 1 is win, 0.5 draw, 0 loss
        'Rock': {'Scissors': 1, 'Rock' : 0.5, 'Paper' : 0},
        'Paper' : {'Rock' : 1, 'Paper' : 0.5, 'Scissors' : 0},
        'Scissors' : {'Paper' : 1, 'Scissors' : 0.5, 'Rock' : 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice]; 
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return[yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0){
        return{'message': 'You lost!', 'color':'red'};
    }else if (yourScore === 0.5){
        return{'message': 'Its a draw!', 'color':'yellow'};
    } else{
        return{'message': 'You won', 'color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = { //cretes a database with all the sources of the pictures.
        'Rock': document.getElementById('Rock').src,
        'Paper': document.getElementById('Paper').src,
        'Scissors': document.getElementById('Scissors').src
    }
    //Removes all images when user clicks
    document.getElementById('Rock').remove();
    document.getElementById('Paper').remove();
    document.getElementById('Scissors').remove();

    //display human choice, results and computer choice

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60 px; padding: 30px; '>"  + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);


}
















