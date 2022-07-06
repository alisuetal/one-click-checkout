import React from 'react';
import "./index.scss";

export default function Button (props: {text: string, function: Function}){
    return(
          <button className="button" onClick={() => props.function()}>
               {props.text}
               <div/>
          </button>
    );
}
