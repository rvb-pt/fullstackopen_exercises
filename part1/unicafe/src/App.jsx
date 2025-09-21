import { useState } from 'react'

// Button component
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

// StatisticLine component
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Statistics component (All; Average; Positive %)
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100

  if (all === 0) {
    return <div>No feedback given</div>
  }
   return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={all}/>
      <StatisticLine text="Average" value={average.toFixed(2)}/>
      <StatisticLine text="Positive" value={positive.toFixed(2) + "%"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="Bad"/>
      <br></br><br></br>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
    )
}

export default App
