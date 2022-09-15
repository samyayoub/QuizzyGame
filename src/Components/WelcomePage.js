import React from "react"
import QuestionPage from "./QuestionPage"

export default function WelcomePage(props)   {
    function startQuiz()    {
        <QuestionPage />
        props.changeEntryPage()
    }
    
    return(
        <div className="welcome-page">
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