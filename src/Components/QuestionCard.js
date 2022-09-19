import React from "react"

export default function QuestionCard(props)  {

    //Getting the values of all answers passed on from the props
    const listOfIncorrectAnswers = props.incorrect_answers
    const correctAnswer = props.correct_answer
    const listOfAllAnswers = []

    // Loop to combine correct and incorrect answers in one array
    // Making each answer a button
    for (let i = 0; i < listOfIncorrectAnswers.length; i++)
        {
            listOfAllAnswers.push(<button className="button-answers">{listOfIncorrectAnswers[i]}</button>)    
        }

    // Push the correct answer to the same array
    listOfAllAnswers.push(<button className="button-answers">{correctAnswer}</button>)    

    // Shuffle the array of answers
    listOfAllAnswers.sort(() => Math.random() - 0.5)

    return(
        <div>
            <h4>{props.question}</h4>
            <h1>{listOfAllAnswers}</h1>
            <hr className="bottom-line" />
        </div>
    )
}