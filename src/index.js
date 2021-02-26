import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, calcTotal] = useState(0)
  const [all, calcAll] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    calcTotal(total+1)
    calcAll(all+1)
  }
  const handleNeutral = () => {
    setNeutral(neutral+1)
    calcAll(all+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    calcTotal(total-1)
    calcAll(all+1)
  }

  const Statistics = (props) => {
    
    if (props.all===0){
      return('No Feedback Given')
    }

    return(
      <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>All {props.all}</p>
      <p>Average {(props.total/props.all)}</p>
      <p>Positive {props.good/props.all} %</p>
      </div>
    )

  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />

      <h1>statistics</h1>
      <Statistics total={total} all={all} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)