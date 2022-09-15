import React from "react"
import WelcomePage from "./WelcomePage"
import QuestionPage from "./QuestionPage"

export default function App()   {
    const [entryPage, setEntryPage] = React.useState(true)

    function changeEntryPage()  {
        setEntryPage(prevValue => !entryPage)
    }

    return(
        <main className="main-app">
            {entryPage ? <WelcomePage changeEntryPage={() => changeEntryPage()}/> : <QuestionPage />}
        </main>
    )
}