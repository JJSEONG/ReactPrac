import React from 'react'

const Input = ({ text_ref }) => {

  console.log(text_ref)

  return (
    <div>
      <input type="text" ref={ text_ref }/>
    </div>
  )
}

export default Input