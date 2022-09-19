import React from "react"
import QuestionCard from "./QuestionCard"

export default function QuestionPage()  {

    // Setup all states
    const [questionData, setQuestionData] = React.useState([])
    const [answers, setAnswers] = React.useState([])
    
    // Fetch data
    React.useEffect(() => {
        // console.log(listOfAllQuestions)
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))    
    }, [])

    function Answer(props)   {
        <div>
            {props}
        </div>
    }

    //Getting the values of all answers
    const listOfIncorrectAnswers = questionData.map(answer => {
        return <QuestionCard 
            question={answer.question}
            incorrect_answers={answer.incorrect_answers}
            correct_answer={answer.correct_answer}
        />
    })

    // Render all questions and answers
    return(
        <div className="question-page">
            <ul>
                {listOfIncorrectAnswers}
            </ul>
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