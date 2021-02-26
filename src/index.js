import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
    
  if (props.all===0){
    return('No Feedback Given')
  }

  return(
    <div>
    <table>
      <tbody>
      <Statistic text ="good" value ={props.good}/>
      <Statistic text ="neutral" value ={props.neutral}/>
      <Statistic text ="bad" value ={props.bad}/>
      <Statistic text ="all" value ={props.all}/>
      <Statistic text ="average" value ={(props.total/props.all)}/>
      <Statistic text ="positive" value ={(props.good/props.all)}/>
      </tbody>
    </table>
    </div>
  )

}

const Statistic = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
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