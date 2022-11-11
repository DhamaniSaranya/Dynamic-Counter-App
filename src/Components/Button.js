import React from 'react';
import './Style.css';

const Button = (props) => { 
  return ( 
    <>
    <button className="AddButton" onClick ={props.onClick}>Add</button> 
    </>
  ); 
  
} 

export default Button;