import React from "react"

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

    // Display questions and answers
    const displayQuestions = []
    for (let i = 0; i < questionData.length; i++)   {
        displayQuestions.push(
            <div>
                <h4>
                    {questionData[i].question}
                </h4>
                <ul>
                    <button className="button">{questionData[i].correct_answer}</button>
                </ul>
            </div>
        )
    }

    // Render all questions and answers
    return(
        <div className="question-page">
            <h3>
                <div>
                    {displayQuestions}
                </div>  
            </h3>
        </div>
    )
}


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