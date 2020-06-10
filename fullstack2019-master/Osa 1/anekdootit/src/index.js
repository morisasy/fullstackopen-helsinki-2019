import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  )
}

const App = (props) => {
  const randomIndex = [Math.floor(Math.random() * anecdotes.length)]
  const [selected, setSelected] = useState(0)
  const [votes, setVoteCount] = useState(new Array(anecdotes.length).fill(0))
  const [maxValueIndex, setMaxValueIndex] = useState(0)

  const addPoints = (index) => {
    const copy = [...votes]
    copy[index] += 1
    setVoteCount(copy)
    maxIndex(copy)
  }

  const maxIndex = (array) => {
    const maxVotes = Math.max(...array)
    const maxIndex = array.indexOf(maxVotes)
    setMaxValueIndex(maxIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} <br />
       Has {votes[selected]} Votes  <br />
      <Button handleClick={() => addPoints(selected)} text="Vote" />
      <Button handleClick={() => setSelected(randomIndex)} text="next anecdote" /> <br />
      <h1>Anecdote with the most votes</h1>
      {props.anecdotes[maxValueIndex]} <br />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)