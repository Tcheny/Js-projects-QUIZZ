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
    console.log(`Question : ${this.newQuestion[randomQuizz]["Question"]}
      \n 1 : ${this.newQuestion[randomQuizz]["1"]}
      \n 2 : ${this.newQuestion[randomQuizz]["2"]}
      \n 3 : ${this.newQuestion[randomQuizz]["3"]}
      \n 4 : ${this.newQuestion[randomQuizz]["4"]}`);

    this.yourAnswer = prompt("Votre réponse : ");
    if (this.yourAnswer != "exit") {
      if (this.newQuestion[randomQuizz]["solution"] == this.yourAnswer) {
        this.score++;
        console.log(`Bravo c'est la bonne réponse. Votre score ${this.score}`);
      } else {
        console.log(`Dommage c'était la réponse ${this.newQuestion[randomQuizz]["solution"]}`);
      }
      this.nextQuestion();
    }
  };
  this.nextQuestion = function() {
    this.randomQuestion()
  }
}



var createQuestion = new Questions();
createQuestion.quizz("Quel est le plus lourd ?", "Une demi feuille", "Un kilo de pierre", "Une tonne de plume", "Toi", 3);
createQuestion.quizz("Qui est ce qu'on attend pour Noël ?", "Jonathan", "Le père Noël", "Le père Dodu", "Le Persil", 2);
createQuestion.quizz('Qui est le plus relou ?', 'La SNCF', 'La RATP', 'Les Gens', 'Tout', 4);
createQuestion.quizz("Qui est le plus cool ?", "MOI", "Toi", "Le mec la bas", "Personne", 1);
createQuestion.quizz("Combien coute Prescillia ?", "122233445500 euros", "Free", "Personne n'en veux", "2,24 euros", 3);
createQuestion.quizz("Qui est toujours énervée dans la P8?", "Amelle", "Jovana","Tcheny","Prescillia", 3);
createQuestion.quizz("Qu'est ce qu'on boit en Serbie?", "Puncho", "Bière pêche","Rakja","Eau", 3)
createQuestion.randomQuestion();
