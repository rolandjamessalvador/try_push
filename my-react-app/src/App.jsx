import { useState } from 'react'

function Student({ name, course, initialScore }) {
  const [score, setScore] = useState(initialScore)

  function handleAddPoints() {
    setScore(score + 5)
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Score: {score}</p>

      <p>
        {score >= 75 ? 'Passed' : 'Failed'}
      </p>

      <button onClick={handleAddPoints}>
        Add 5 Points
      </button>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Student Grade Dashboard</h1>

      <Student
        name="Alex"
        course="BSIT"
        initialScore={70}
      />

      <Student
        name="Mia"
        course="BSCS"
        initialScore={80}
      />
    </div>
  )
}

export default App