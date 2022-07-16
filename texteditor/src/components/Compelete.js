import React from "react";

const Compelete = ( { text_ref, setText } ) => {
  return (
    <div>
      <button onClick={() => {
        setText(text_ref)
      }}>완성</button>
    </div>
  )
}

export default Compelete