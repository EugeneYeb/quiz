import React, { useState } from 'react';

export default function App() {
	const previousScores = [];
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},

	];


	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const playAgain = () => {

		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);

	}

	const handleAnswerButtonClick = (isCorrect) => {

		if (isCorrect===true) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);

			previousScores.push(score+1);
			console.log(previousScores);

		}
	}
	return (
		<div className='app'>

			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button onClick = {playAgain}> Play Again</button>
				
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{ questions[currentQuestion].questionText }</div>
					</div>
					<div className='answer-section'>

						{ questions[currentQuestion].answerOptions.map((answerOption)=> (
						<button onClick = { () => handleAnswerButtonClick(answerOption.isCorrect)}> {answerOption.answerText} </button>
						))}

					</div>
				</>
			)}
		</div>
	);
}
