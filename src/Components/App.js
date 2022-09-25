import React from "react"
import WelcomePage from "./WelcomePage"
import QuestionPage from "./QuestionPage"

export default function App()   {
    const [entryPage, setEntryPage] = React.useState(true)
    const [questionData, setQuestionData] = React.useState([])

     // Fetch data
     React.useEffect(() => {
        // console.log(listOfAllQuestions)
        fetch("https://opentdb.com/api.php?amount=10")
            .then(res => res.json())
            .then(data => setQuestionData(data.results))    
    }, [])

    function changeEntryPage()  {
        setEntryPage(prevValue => !entryPage)
    }

    return(
        <main className="main-app">
            {entryPage ? <WelcomePage changeEntryPage={() => changeEntryPage()}/> : <QuestionPage data={questionData}/>}
        </main>
    )
}