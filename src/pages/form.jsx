import React, { useEffect, useState } from 'react'

const Form = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [user, setUser] = useState([])
  
  const style = {
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    
  }

  async function saveUser(){
    await fetch('/api/form', {
      method:'POST',
      body: JSON.stringify({name: name,age: age})
    })

    setName("")
    setAge(0)

    const resp = await fetch('api/form')
    const user = await resp.json()
    setUser(user)
  }

  const renderUser = () =>{
    return user.map((user, i) => {
      return <li style={{
        marginTop: "1rem"
      }} key={i}>{user.name} is {user.age} years old</li>
    })
  }


  return (
    <>
      <div style={style}>
        <h1>API Integration</h1>
        <input  type="text" value={name} onChange={e => setName(e.target.value)}/>
        <input style={{
          marginTop: "1rem"
        }} type="number" value={age} onChange={e => setAge(+e.target.value)} />

        <button style={{
          marginTop: "1rem"
        }} onClick={saveUser}>Send</button>

        <ul >
          {renderUser()}
        </ul>
      </div>
    </>
  )
}

export default Form