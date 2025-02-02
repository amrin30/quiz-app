

import { useState, useEffect } from "react";
import styles from "./QuizQuestion.module.css"; // Import the CSS module

function QuizQuestion({ question, onAnswer, currentQuestion, totalQuestions }) {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      onAnswer(false);
    }
  }, [timeLeft, onAnswer]);

  const handleAnswerClick = (selectedAnswer) => {
    console.log("Question:", question);
    console.log("Selected answer:", selectedAnswer);

    const isCorrect =
      question.options.find((option) => option.description === selectedAnswer && option.is_correct) !== undefined;

    console.log("Is correct:", isCorrect);
    onAnswer(isCorrect);
  };

  if (!question) {
    console.error("Question is undefined");
    return <div className={styles.errorMessage}>Error: Question is undefined</div>;
  }

  return (
    <div className={styles.quizContainer}>
      <h3 className={styles.quizHeader}>
        Question {currentQuestion} of {totalQuestions}
      </h3>
      <p className={styles.quizTimer}>Time Left: {timeLeft} seconds</p>
      <h2 className={styles.quizQuestion}>{question.description}</h2>
      <ul className={styles.quizOptions}>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(option.description)} className={styles.quizButton}>
              {option.description}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizQuestion;
