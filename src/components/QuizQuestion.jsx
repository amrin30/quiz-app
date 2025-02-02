
import { useState, useEffect } from "react";
import styles from "./QuizQuestion.module.css"; 

function QuizQuestion({ question, onAnswer, currentQuestion, totalQuestions, nextQuestion }) {
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    setTimeLeft(10); 
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer); 
          onAnswer(false); 
          nextQuestion(); 
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); 
  }, [question, onAnswer, nextQuestion]); // Trigger timer when question changes

  const handleAnswerClick = (selectedAnswer) => {
    const isCorrect =
      question.options.find((option) => option.description === selectedAnswer && option.is_correct) !== undefined;

    onAnswer(isCorrect); // Notify parent about the answer
    clearInterval(timer); // Stop the timer when an answer is selected
    nextQuestion(); // Move to the next question
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
