import React from "react"
import { nanoid } from "nanoid"

export default function QuestionCard(props)  {

    //Getting the values of all answers passed on from the props
    
    // // Function to combine answers
    // function combineAnswers()   {
    //     // Loop to combine correct and incorrect answers in one array
    //     const listOfAllAnswers = []
    //     for (let i = 0; i < props.incorrect_answers.length; i++)
    //     {
    //         listOfAllAnswers.push({
    //            value: props.incorrect_answers[i],
    //            isHeld: false,
    //            id: nanoid()
    //         })
    //     }
    //     // Push the correct answer to the same array
    //     listOfAllAnswers.push({value: props.correct_answer, isHeld: false, id: nanoid()})

    //     // Shuffle the array of answers
    //     listOfAllAnswers.sort(() => Math.random() - 0.5)

    //     return listOfAllAnswers
    //     {console.log(listOfAllAnswers)}
    // }

    // const answers = props.incorrect_answers.map(answer => {
    //     <ul>
    //         <li>{answer.value}</li>
    //     </ul>
    // })

    return(
        <div>
            <h4>
                {props.question}
                {props.incorrect_answers}
            </h4>
            <hr />
        </div>
    )
}