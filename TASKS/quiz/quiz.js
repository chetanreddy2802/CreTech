const questions = [
    {
      question: "What is the capital of France?",
      options: { a: "Berlin", b: "Paris", c: "Madrid", d: "Rome" },
      correct: "b"
    },
    {
      question: "What is 5 + 3?",
      options: { a: "5", b: "8", c: "10", d: "7" },
      correct: "b"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: { a: "Earth", b: "Saturn", c: "Mars", d: "Venus" },
      correct: "c"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: { a: "William Shakespeare", b: "J.K. Rowling", c: "Mark Twain", d: "Leo Tolstoy" },
      correct: "a"
    },
    {
      question: "Which ocean is the largest?",
      options: { a: "Atlantic", b: "Indian", c: "Arctic", d: "Pacific" },
      correct: "d"
    },
    {
      question: "What is the boiling point of water?",
      options: { a: "90°C", b: "100°C", c: "110°C", d: "120°C" },
      correct: "b"
    },
    {
      question: "Which is the longest river in the world?",
      options: { a: "Nile", b: "Amazon", c: "Yangtze", d: "Mississippi" },
      correct: "a"
    },
    {
      question: "Who discovered gravity?",
      options: { a: "Einstein", b: "Newton", c: "Galileo", d: "Tesla" },
      correct: "b"
    },
    {
      question: "Which country is famous for sushi?",
      options: { a: "Japan", b: "China", c: "India", d: "Italy" },
      correct: "a"
    },
    {
      question: "Which language is used for web apps?",
      options: { a: "PHP", b: "Python", c: "JavaScript", d: "All of the above" },
      correct: "d"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').innerText = q.question;
    document.getElementById('a').innerText = "A. " + q.options.a;
    document.getElementById('b').innerText = "B. " + q.options.b;
    document.getElementById('c').innerText = "C. " + q.options.c;
    document.getElementById('d').innerText = "D. " + q.options.d;
  
    // Reset button classes
    document.querySelectorAll('.answer').forEach(btn => {
      btn.classList.remove('correct', 'wrong');
      btn.disabled = false;
    });
  }
  
  function selectAnswer(option) {
    const q = questions[currentQuestion];
    const selectedButton = document.getElementById(option);
  
    if (option === q.correct) {
      selectedButton.classList.add('correct');
      score++;
    } else {
      selectedButton.classList.add('wrong');
      document.getElementById(q.correct).classList.add('correct');
    }
  
    // Disable all buttons after selection
    document.querySelectorAll('.answer').forEach(btn => btn.disabled = true);
  
    // Move to next question after a short delay
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    }, 1000);
  }
  
  function showResult() {
    const resultPercent = (score / questions.length) * 100;
    const body = document.querySelector('body');
  
    // Change background based on pass/fail
    if (resultPercent >= 60) {
      body.classList.add('pass');
    } else {
      body.classList.add('fail');
    }
  
    // Show result
    document.querySelector('.quiz-container').innerHTML = `
      <div class="result-container">
        <h2>${resultPercent >= 60 ? "🎉 You Passed! 🎉" : "😥 You Failed! 😥"}</h2>
        <p>Your Score: ${score} / ${questions.length} (${resultPercent}%)</p>
        <button onclick="location.reload()">Play Again</button>
      </div>
    `;
  }
  
  // Load first question
  loadQuestion();
  