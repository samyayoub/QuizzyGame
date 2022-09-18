import React from "react"

export default function QuestionCard(props)  {
    //Getting the values of all answers
    const listOfIncorrectAnswers = props.incorrect_answers
    const correctAnswer = props.correct_answer
    const listOfAllAnswers = []

    // Loop to combine correct and incorrect answers in one array
    // Making each answer a button
    for (let i = 0; i < listOfIncorrectAnswers.length; i++)
        {
            listOfAllAnswers.push(listOfIncorrectAnswers[i])    
        }

    // Push the correct answer to the same array
    // Making the answer a button
    listOfAllAnswers.push(correctAnswer)    

    // Shuffle the array of answers
    listOfAllAnswers.sort(() => Math.random() - 0.5)
    console.log(listOfAllAnswers)

    return(
        <div>
            <h4>Incorrect Answers: {props.incorrect_answers}</h4>
            <h4>Correct Answer: {props.correct_answer}</h4>
            <h1>{listOfAllAnswers}</h1>
        </div>
    )
}