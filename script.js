let score = 0;

const scoreDisplay = document.getElementById("score");

const questions = [];

for (let i = 1; i <= 10; i++) {
  questions.push(document.getElementById("question" + i));
}

let currentQuestion = 0;


function showNextQuestion() {

  questions[currentQuestion].style.display = "none";

  currentQuestion++;

  if (currentQuestion < questions.length) {
    questions[currentQuestion].style.display = "block";
  }

}


questions.forEach(function(question, questionIndex) {

  const buttons = question.querySelectorAll("button");

  buttons.forEach(function(button) {

    button.addEventListener("click", function() {

      const point = Number(button.dataset.score);

      score = score + point;

      scoreDisplay.textContent = score;

      buttons.forEach(function(button) {
        button.disabled = true;
      });


      if (questionIndex < questions.length - 1) {

        showNextQuestion();

      } else {

        showResult();

      }

    });

  });

});


function showResult() {

  let resultTitle = "";
  let resultText = "";


  if (score === 10) {

    resultTitle = "完全一致";
    resultText = "君とこのキャラクターは、とてもよく似てる！";

  } else if (score >= 6) {

    resultTitle = "いいかんじ";
    resultText = "君とこのキャラクターは、かなり相性が良さそう！";

  } else if (score >= 3) {

    resultTitle = "そこそこ";
    resultText = "君とこのキャラクターには…似ているところがあるかな！";

  } else {

    resultTitle = "一致しない";
    resultText = "君とこのキャラクターは…あまり似てないかな！";

  }


  document.body.innerHTML = `

    <h1>診断結果</h1>

    <h2>${resultTitle}</h2>

    <p>${resultText}</p>

    <p>あなたの得点：${score} / 10点</p>

  `;

}
