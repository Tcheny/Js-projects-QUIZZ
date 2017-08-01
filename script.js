function Questions() {
  this.newQuestion = [];
  this.score = 0;
  this.quizz = function(question, reponse1, reponse2, reponse3, reponse4, solution) {
    this.newQuestion.push({
      'Question': question,
      '1': reponse1,
      '2': reponse2,
      '3': reponse3,
      '4': reponse4,
      'solution': solution
    });
  };
  this.randomQuestion = function() {
    const randomQuizz = Math.floor(Math.random() * this.newQuestion.length);
    console.log(`${this.newQuestion[randomQuizz]["Question"]}
      \n ${this.newQuestion[randomQuizz][1]}
      \n ${this.newQuestion[randomQuizz][2]}
      \n ${this.newQuestion[randomQuizz][3]}
      \n ${this.newQuestion[randomQuizz][4]}`);

    this.yourAnswer = prompt("Votre réponse : ");
    if (this.yourAnswer != "exit") {
      if (this.newQuestion[randomQuizz]["solution"] == this.yourAnswer) {
        this.score++;
        console.log(`Bravo c'est la bonne réponse. Votre score ${this.score}`);
      } else {
        console.log(`Dommage c'était la réponse`);
      }
      this.nextQuestion();
    }
  };
  this.nextQuestion = function() {
    this.randomQuestion()
  }
}



var createQuestion = new Questions();
createQuestion.quizz("Quel est le plus lourd ?", "Une tonne de plume", "Un kilo de pierre", "Une demi feuille", "Toi", 1);
createQuestion.quizz("Qui est ce qu'on attend pour Noël ?", "Jonathan", "Le père Noël", "Le père Dodu", "Le Persil", 2);
createQuestion.quizz('Qui est le plus relou ?', 'La SNCF', 'La RATP', 'Les Gens', 'Tout', 4);
createQuestion.randomQuestion();
