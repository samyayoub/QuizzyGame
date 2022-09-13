import React from "react"

export default function WelcomePage()   {
    function startQuiz()    {
        console.log("click")    
    }
    
    return(
        <div className="main-app">
            <h2>QuizzyGame</h2>
            <p>A Trivia Game</p>
            <button 
                className="button"
                onClick={startQuiz}
                >
                Start Quiz
            </button>
        </div>
    )
}