import React from 'react';
import {Link} from 'react-router-dom';
import "./index.scss";

export default function ButtonHref (props: {text: string, to: string}){
    return(
          <button>
               <p>
                    <Link to={props.to}>
                         {props.text}
                    </Link>
               </p>
          </button>
    );
}
