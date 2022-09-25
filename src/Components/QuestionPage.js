import React from "react"
import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

export default function QuestionPage(props)  {

    // Setup all states
    const [answers, setAnswers] = React.useState()
    const [questions, setQuestions] = React.useState()

    React.useEffect(() => {
        setQuestions(getQuestions())
    }, [])

    React.useEffect(() => {
        setAnswers(combineAnswers())
    }, [])

    function getQuestions() {
        const questionsArray = []
        for (let i = 0; i < props.data.length; i++) {
            questionsArray.push(props.data[i].question)
        }
        return questionsArray   
    }

    // // Function to generate blank answer object
    // function generateOneAnswer()    {
    //     return {
    //         value: props.data.value,
    //         isHeld: false,
    //         id: nanoid()   
    //     }
    // }

    // Function to combine answers
    function combineAnswers()   {
        // Loop to combine correct and incorrect answers in one array
        const arrayOfAllAnswers = []
        for (let i = 0; i < props.data.length; i++)
        {
            for (let j = 0; j < props.data[i].incorrect_answers.length; j++)    {
                // arrayOfAllAnswers.push(generateOneAnswer(() => props.data[i].incorrect_answers[j]))
                arrayOfAllAnswers.push({
                    value: props.data[i].incorrect_answers[j],
                    isHeld: false,
                    id: nanoid()   
                })
            }
            // Push the correct answer to the same array
            arrayOfAllAnswers.push({
                value: props.data[i].correct_answer,
                isHeld: false,
                id: nanoid()
            })

            // Shuffle the array of answers
            arrayOfAllAnswers.sort(() => Math.random() - 0.5)
        }

        console.log(arrayOfAllAnswers)
        return arrayOfAllAnswers
    }
  
    // Render all questions and answers
    return(
        <div className="question-page">
            <QuestionCard question={questions} answersValue={answers}/>
        </div>
    )
}


// {JSON.stringify(questionData, null, 2)}

// {
//     "category": "General Knowledge",
//     "type": "multiple",
//     "difficulty": "easy",
//     "question": "Which country, not including Japan, has the most people of japanese decent?",
//     "correct_answer": "Brazil",
//     "incorrect_answers": [
//       "China",
//       "South Korea",
//       "United States of America"
//     ]
//   }