import React from 'react';

const validation = (props) => {
  

  return (
    <div>
      your entry is {props.inputLength < 5 ? 'too short' : 'accepted'}
    </div>
  )
} 

export default validation;