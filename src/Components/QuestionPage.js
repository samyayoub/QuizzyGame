import React from "react"
import QuestionCard from "./QuestionCard"
import { nanoid } from "nanoid"

export default function QuestionPage()  {

    // Setup all states
    const [questionData, setQuestionData] = React.useState([])
    const [answers, setAnswers] = React.useState(combineAnswers())
    
    // Fetch data
    React.useEffect(() => {
        // console.log(listOfAllQuestions)
        fetch("https://opentdb.com/api.php?amount=10")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))    
    }, [])

    // // Initialize a Lazy State so it will only run component at the beginning
    // React.useEffect(() => {
    //     setQuestionData(questionData)    
    // }, [questionData])


    // Function to generate blank question object
    function generateOneAnswer(props)    {
        return {
            value: props.value,
            isHeld: false,
            id: nanoid()   
        }
    }

    // ---------------------------------------------
    // Function to combine answers
    function combineAnswers()   {
        // Loop to combine correct and incorrect answers in one array
        const listOfAllAnswers = []
        for (let i = 0; i < questionData.length; i++)
        {
            listOfAllAnswers.push(generateOneAnswer(questionData.incorrect_answers[i]))
        }

        // Push the correct answer to the same array
        listOfAllAnswers.push({
            value: questionData.correct_answer,
            isHeld: false,
            id: nanoid()
        })

        // Shuffle the array of answers
        listOfAllAnswers.sort(() => Math.random() - 0.5)

        return listOfAllAnswers
    }
    // ---------------------------------------------

    //Getting the values of all answers
    const allAnswers = answers.map(answer => {
        return <QuestionCard 
            question={answer.question}
            incorrect_answers={answer.incorrect_answers}
            correct_answer={answer.correct_answer}
        />
    })

    // Render all questions and answers
    return(
        <div className="question-page">
            {allAnswers}
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