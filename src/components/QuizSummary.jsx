
import { useState } from "react";
import styles from "./QuizSummary.module.css";
import { FaRegStar } from "react-icons/fa"; 

function QuizSummary({ score, totalQuestions, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isSuccess = percentage >= 70;

  return (
    <div className={styles.quizSummaryContainer}>
      <div className={styles.resultBox}>
        <h2 className={styles.header}>🎉 Quiz Completed!</h2>
        <div className={styles.progressContainer}>
          <div className={styles.progressBar} style={{ width: `${percentage}%` }}></div>
        </div>
        <p className={styles.score}>
          Your score: <span className={styles.scoreHighlight}>{score}</span> / {totalQuestions}
        </p>
        <p className={`${styles.percentageText} ${isSuccess ? styles.success : styles.tryAgain}`}>
          {percentage}% - {isSuccess ? "🌟 Great job!" : "😞 Keep practicing!"}
        </p>
        <div className={styles.feedbackContainer}>
          {isSuccess && <FaRegStar className={styles.starIcon} />}
        </div>
        <button onClick={onRestart} className={styles.restartButton}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default QuizSummary;
