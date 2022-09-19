import React from "react"
import QuestionPage from "./QuestionPage"

export default function WelcomePage(props)   {
    function startQuiz()    {
        <QuestionPage />
        props.changeEntryPage()
    }
    
    return(
        <div className="welcome-page">
            <h1>QuizzyGame</h1>
            <p>A Trivia Game</p>
            <div className="wrapper">
                <button 
                    className="button-start-game"
                    onClick={startQuiz}
                    >
                    Start Game
                </button>
            </div>
        </div>
    )
}