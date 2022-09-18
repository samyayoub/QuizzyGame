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
        return <QuestionCard incorrect_answers={answer.incorrect_answers} correct_answer={answer.correct_answer}/>
    })
        
    // listOfIncorrectAnswers = questionData.map(answer => {return answer.incorrect_answers.map(subAnswer => {return questionData[answer][subAnswer]})})
    // questionData.map(answer => questionData.incorrect_answers[answer].map(subAnswer => listOfIncorrectAnswers[answer][subAnswer]))
    // const correctAnswer = []
    // questionData.correct_answer.map(answer => correctAnswer[answer])
    // const listOfAllAnswers = []
    
    // // Loop to combine correct and incorrect answers in one array
    // // Making each answer a button
    // for (let i = 0; i < listOfIncorrectAnswers.length; i++)
    //     {
    //         listOfAllAnswers[i].push(
    //             {
    //                 value: listOfIncorrectAnswers
    //                 // isHeld: false,
    //                 // id: props.key
    //             }
    //         )
    //         listOfAllAnswers.push({
    //             value: correctAnswer[i]
    //         })    
    //     }
    
    // // Push the correct answer to the same array
    // // Making the answer a button
    // // listOfAllAnswers.push({
    // //     value: correctAnswer
    // //     // isHeld: false,
    // //     // id: nanoid()
    // // })
    
    // // Initialize a Lazy State so it will only run component at the beginning
    // React.useEffect(() => {
    //     setAnswers(listOfAllAnswers)    
    // }, [])
    
    // // Shuffle the array of answers
    // listOfAllAnswers.sort(() => Math.random() - 0.5)
    // console.log(listOfAllAnswers)

    // setAnswers(listOfAllAnswers)

    //  // Display questions and answers
    //  const displayQuestions = []
    //  for (let i = 0; i < questionData.length; i++)   {
    //      displayQuestions.push(
    //          <div>
    //              <h4>
    //                  {questionData[i].question}
    //              </h4>
    //              <ul>
    //                  <button className="button">{answers[i]}</button>
    //              </ul>
    //          </div>
    //      )
    //  }

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