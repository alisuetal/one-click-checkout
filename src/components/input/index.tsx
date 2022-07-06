import React, { useEffect } from 'react';
import { useState } from 'react';
import "./index.scss";

export default function Input (props: {placeholder: string, type: string, function: Function}){
     const [value, setValue] = useState('');

     return(
          <input placeholder={props.placeholder} onChange={(e) => {setValue(e.target.value); props.function(e.target.value);}} type={props.type} value={value}/>
     );
}
