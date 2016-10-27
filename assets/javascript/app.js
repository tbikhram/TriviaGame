/**
 * Created by tbikhram on 10/26/16.
 */
// function to populate the questions
function populate() {
    if(quiz.isEnded()) {
        showScores();

    }

    else {
        // show question
        var element = document.getElementById("question"); // takes  the question from the id of this paragraph element
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices  inside the buttons

        var	choices = quiz.getQuestionIndex().choices; // slect the choices
        for(var i= 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML=choices[i];
            guess("btn" + i, choices[i]);

        }

        showProgress();
    }

};


function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of " + quiz.questions.length;

}


function showScores() {

    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id= 'score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

};


var questions = [
    new Question("  In the movie Fantastic Mr.Fox, Mr. Fox's job was ?", ["Writer ", "Thief", "Tree Climber", "Farmer"], "A"),

    new Question("Life Aquatic team leader was ?", ["terri cruz", "bob hope", "james bond", "Steve Zissou"], "D"),

    new Question("This movie was named after a train in India? ?", ["The Darjeeling Limited ", "Rushmore", "Bottle Rocket", "PathTrain"],"A"),

    new Question("In The Grand Budapest Hotel, the hotel assistant was ?", ["Zero", "1", "Jeff", " Diego"],"A"),

    new Question("In Moonrise Kingdom the camp leader was ?", ["Bruce Willis", "Eward Norton", "Mr. Fox", "Bill Murray"], "B"),
];

// creating an object

var quiz= new Quiz(questions);

populate();