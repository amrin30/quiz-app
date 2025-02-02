
import styles from "./QuizStart.module.css"; 

function QuizStart({ onStart }) {
  return (
    <div className={styles.quizStartContainer}>
      <h1 className={styles.header}>Welcome to the Quiz!</h1>
      <p className={styles.description}>Test your knowledge with our exciting questions.</p>
      <button onClick={onStart} className={styles.startButton}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizStart;
