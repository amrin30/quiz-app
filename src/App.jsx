

import { useState, useEffect } from "react";
import QuizStart from "./components/QuizStart";
import QuizQuestion from "./components/QuizQuestion";
import QuizSummary from "./components/QuizSummary";
import styles from "./App.module.css"; // Import the CSS module

function App() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    fetchQuizData();
  }, []);

  const fetchQuizData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/quiz");
      if (!response.ok) {
        throw new Error("Failed to fetch quiz data");
      }
      const data = await response.json();
      console.log("Fetched quiz data:", data);
      if (!data.questions || !Array.isArray(data.questions) || data.questions.length === 0) {
        throw new Error("Invalid quiz data format");
      }
      setQuizData(data.questions);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setError("Error fetching quiz data. Please try again later.");
      setLoading(false);
    }
  };

  const startQuiz = () => {
    console.log("Starting quiz with data:", quizData);
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  };

  const handleAnswer = (isCorrect) => {
    console.log("Answer received in App:", isCorrect);
    console.log("Current question:", quizData[currentQuestion]);

    if (isCorrect) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        console.log("New score:", newScore);
        return newScore;
      });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowSummary(true);
    }
  };

  console.log("Current state:", { quizStarted, showSummary, currentQuestion, quizDataLength: quizData?.length, score });

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingText}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.errorText}>{error}</div>
      </div>
    );
  }

  let content;
  if (!quizStarted) {
    content = <QuizStart onStart={startQuiz} />;
  } else if (showSummary) {
    content = <QuizSummary score={score} totalQuestions={quizData.length} onRestart={startQuiz} />;
  } else if (quizData && quizData[currentQuestion]) {
    content = (
      <QuizQuestion
        question={quizData[currentQuestion]}
        onAnswer={handleAnswer}
        currentQuestion={currentQuestion + 1}
        totalQuestions={quizData.length}
      />
    );
  } else {
    content = <div className={styles.errorText}>Error: Invalid question data</div>;
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.quizContainer}>{content}</div>
    </div>
  );
}

export default App;
