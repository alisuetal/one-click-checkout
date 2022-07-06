import React from 'react';
import "./index.scss";

export default function GhostButton (props: {text: string, function: Function}){
    return(
          <button className='button' id="ghost-button" onClick={() => props.function()}>
               {props.text}
          </button>
    );
}