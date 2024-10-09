import { useState } from 'react';
import './App.css';

function App() {
    const quizData = [
        { question: "What is the capital of France?", a: "Berlin", b: "Madrid", c: "Paris", d: "Rome", correct: "c" },
        { question: "Who is the CEO of Tesla?", a: "Bill Gates", b: "Elon Musk", c: "Jeff Bezos", d: "Mark Zuckerberg", correct: "b" },
        { question: "What is the largest ocean on Earth?", a: "Indian Ocean", b: "Atlantic Ocean", c: "Arctic Ocean", d: "Pacific Ocean", correct: "d" },
        { question: "How many continents are there?", a: "5", b: "6", c: "7", d: "8", correct: "c" }
    ];

    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);


    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.id);  
    };


    const handleSubmit = () => {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            setScore(score + 1);  
        }


        if (currentQuiz < quizData.length - 1) {
            setCurrentQuiz(currentQuiz + 1);  
            setSelectedAnswer(null);  
        } else {
            alert(`You scored ${score + 1}/${quizData.length}`);  
            window.location.reload();  
        }
    };

    return (
        <div className="quiz-container">
            <div id="quiz">
                <h2>{quizData[currentQuiz].question}</h2>  

                <ul className="options">
                    <li>
                        <input
                            type="radio"
                            name="answer"
                            id="a"
                            className="answer"
                            onChange={handleAnswerChange}
                            checked={selectedAnswer === 'a'}  
                        />
                        <label htmlFor="a">{quizData[currentQuiz].a}</label>  
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="answer"
                            id="b"
                            className="answer"
                            onChange={handleAnswerChange}
                            checked={selectedAnswer === 'b'} 
                        />
                        <label htmlFor="b">{quizData[currentQuiz].b}</label>  
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="answer"
                            id="c"
                            className="answer"
                            onChange={handleAnswerChange}
                            checked={selectedAnswer === 'c'}  
                        />
                        <label htmlFor="c">{quizData[currentQuiz].c}</label>  
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="answer"
                            id="d"
                            className="answer"
                            onChange={handleAnswerChange}
                            checked={selectedAnswer === 'd'}  
                        />
                        <label htmlFor="d">{quizData[currentQuiz].d}</label>  
                    </li>
                </ul>

                <button id="submit" onClick={handleSubmit}>Submit</button>  
            </div>
        </div>
    );
}

export default App;
