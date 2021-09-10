const quizData = [
	{
		question: "Which of the following language was developed as the first purely object programming language?",

		a: "SmallTalk",
		b: "C++",
		c: "Kotlin",
		d: "Java",
		correct: "a",
	},
	{
		question: "Who developed object-oriented programming?",

		a: "Adele Goldberg",
		b: "Dennis Ritchie",
		c: "Alan Kay",
		d: "Andrea Ferro",
		correct: "c",
	},
	{
		question: "Which of the following is not an OOPS concept?",

		a: "Encapsulation",
		b: "Polymorphism",
		c: "Exception",
		d: "Abstraction",
		correct: "c",
	},
	{
		question: "Which feature of OOPS describes the reusability of code?",

		a: "Abstraction",
		b: "Encapsulation",
		c: "Polymorphism",
		d: "Inheritance",
		correct: "d",
	},
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
	const currentQuizData = quizData[currentQuiz]

	questionEl.innerText = currentQuizData.question
	a_text.innerText = currentQuizData.a
	b_text.innerText = currentQuizData.b
	c_text.innerText = currentQuizData.c
	d_text.innerText = currentQuizData.d
}

function deselectAnswers(){
	answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
	let answer

	answerEls.forEach(answerEl => {
		if(answerEl.checked){
			answer = answerEl.id
		}
	})

	return answer
}

submitBtn.addEventListener('click', ()=>{
	const answer =  getSelected()

	if(answer){
		if(answer === quizData[currentQuiz].correct){
			score++
		}

		currentQuiz++

		if(currentQuiz < quizData.length){
			loadQuiz()
			deselectAnswers()
		}else {
			quiz.innerHTML = `
				<h2> You answered ${score}/${quizData.length} questions correctly</h2>
				<button onclick = "location.reload()">Reload</button>

			`
		}
	}
})