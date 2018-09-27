import React from 'react'

const Band = props => {
  console.log('Band props is: ', props)
  return (
    <li>{props.text}</li>
  );
};

export default Band;
