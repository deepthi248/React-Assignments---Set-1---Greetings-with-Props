// write code for Welcome component here
import React from "react";

function Welcome(props) {
  return(
    <h3 class="name">{props.name}</h3>
    <h1 class={props.text}>{props.text}</h1>
     <h2>Welcome to Newton School.</h2>
      )
}
export default Welcome;
  
