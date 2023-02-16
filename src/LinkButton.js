import React from 'react';
import { Link } from 'react-router-dom';


export function LinkButton(props) {
  return (
    <div>
      <Link to={props.url}><button>{props.buttonText}</button></Link>
    </div>
  )
}