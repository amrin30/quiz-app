📌 Quiz App
An interactive quiz application built with React (Vite) that fetches quiz questions from an API and tracks user progress.

🚀 Features
📌 Fetches quiz questions dynamically.
⏳ Timer-based questions for a challenging experience.
🎯 Tracks user score and progress.
🔄 Option to restart the quiz.
🛠 Tech Stack
Frontend: React (Vite), JavaScript
Backend API: Node.js, Express.js (expected API at http://localhost:5000/api/quiz)



📂 Project Structure
📦 quiz-app
 ┣ 📂 src
 ┃ ┣ 📜 App.jsx        # Manages quiz state and renders components
 ┃ ┣ 📜 QuizStart.jsx  # Displays the start screen
 ┃ ┣ 📜 QuizQuestion.jsx # Displays questions and tracks answers
 ┃ ┣ 📜 QuizSummary.jsx  # Shows final score and restart option
 ┃ ┗ 📜 main.jsx       # Entry point for the React app
 ┣ 📜 index.html       # Root HTML file
 ┣ 📜 package.json     # Project dependencies
 ┣ 📜 vite.config.js   # Vite configuration
 ┗ 📜 README.md        # Project documentation



 
🛠 Installation and Setup
Clone the Repository

bash
Copy
Edit
git clone https://github.com/amrin30/quiz-app.git
cd quiz-app
Install Dependencies

bash
Copy
Edit
npm install
Run the Development Server

bash
Copy
Edit
npm run dev
Backend API
Ensure the quiz API is running at http://localhost:5000/api/quiz.

🎯 Usage
Start the quiz from the homepage.
Answer questions within the time limit.
View your final score at the end.
Restart the quiz if desired.
🖼 Screenshots
Find UI images in the /screenshots folder.

Start Screen	Quiz Question	Quiz Summary
📽 Video Walkthrough
A short demo video is available in the /video folder:
📌 Video Walkthrough

📌 Future Enhancements
Add more question categories.
Implement user authentication for tracking progress.
Store quiz history in a database.
🤝 Contributing
Pull requests are welcome! Feel free to open an issue for suggestions.
