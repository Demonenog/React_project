import React, { useState } from 'react';
import { quiz } from './DataQuiz';
import './Quiz.css';

const Quiz = () => {
	const [score, setScore] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showText, setShowText] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const { questions } = quiz;
	const { question, answers, correctAnswer } = questions[currentQuestion];

	const handleAnswerOptionClick = selectedAnswer => {
		selectedAnswer === questions[currentQuestion].correctAnswer &&
			setScore(score + 1);

		const nextQuestion = currentQuestion + 1;

		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
			score == questions.length - 1 && setShowText(true);
		}
	};

	return (
		<>
			<h1>React Quiz App</h1>
			<div className='quiz-app'>
				{showScore ? (
					<div className='score-section'>
						You scored {score} out of {questions.length}
						{showText && (
							<>
								<h4>Поздравляю ты молодец!</h4>
								<button onClick={() => window.location.reload()}>
									Restart
								</button>
							</>
						)}
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span> / {questions.length}
							</div>
							<div className='question-text'>
								{questions[currentQuestion].question}
							</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].answers.map(answer => (
								<button
									className='answer-button'
									key={answer}
									onClick={() => handleAnswerOptionClick(answer)}
								>
									{answer}
								</button>
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Quiz;
