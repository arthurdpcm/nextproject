import React from 'react'
export function getStaticProps(){
  return{
    props:{
      number: Math.random()
    }
  }
}

const Static1 = (props) => {
  return (
    <div>
      <span>Random: {props.number}</span>
    </div>
  )
}

export default Static1