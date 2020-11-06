import React from "react"
import ReactDOM from "react-dom"

const App = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <p>This is React + Typescript minimum template.</p>
            <a href="https://github.com/ragnar1904/react-ts-min">Github</a>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))