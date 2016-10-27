//5 will create the functions for the optionsof the questions

function Question(text, choices, answer){ // this the attributes
    this.text = text;
    this. choices = choices;
    this. answer = answer;

}

// add the fruntions if its correct
//5a
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}