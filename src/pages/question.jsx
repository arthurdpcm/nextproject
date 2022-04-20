import React, { useEffect, useState } from 'react'


const Question = () => {
  const [question, setQuestion] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/question/123')
    .then(resp => resp.json())
    .then(setQuestion)
  }, [])
  

  const renderAnswers = () => {
    if (question){
      return question.answers.map((ans, i) => {
        return <li key={i}><button >{ans}</button></li>
      })
    }
    
    return false
  }

  return (
    <>
      <h1>Question</h1>
      <div>
        <span>{question?.id} - {question?.sentence}</span>
        <ul>
          {renderAnswers()}
        </ul>
      </div>
    </>
  
  )
}

export default Question