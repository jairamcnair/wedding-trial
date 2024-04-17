import "./../styles/ledger2.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState, useEffect} from 'react';
import { useRef } from 'react';
import { useId } from 'react';
//import Budget from './Budget'

// source for persist checkboxes - https://www.sitepoint.com/quick-tip-persist-checkbox-checked-state-after-page-reload/ 
// source: style checkboxes - https://sentry.io/answers/how-to-style-a-checkbox-using-css/ 

const RadioButton = () => {
    const [checked, setChecked] = useState(() => {
      const saved = localStorage.getItem("checked"); 
      const initialValue = JSON.parse(saved); return initialValue || "";
      }
  ); useEffect(() => {localStorage.setItem('checked', JSON.stringify(checked));},[checked]);
    
  
  const [style, setStyle] = useState(() => {
      const saved = localStorage.getItem("style"); 
      const initialValue = JSON.parse(saved); return initialValue || "light";
      }
  );useEffect(() => {localStorage.setItem('style', JSON.stringify(style));},[style]);

    
  function getId(){
      const id = useId()
      return id
    }

    
    function handleChange(id, e){
      console.log("you clicked input - " + id)
      if(checked === 'true'){
        setChecked('false')
        console.log(checked)
        localStorage.setItem('checked', 'false');
        setStyle("dark");
      }
      if(checked === 'false'){
        setChecked('true')
        console.log(checked)
        localStorage.setItem('checked', 'true');
        setStyle("light");
      }
    }

    return (
      <>
        <input
          className={style}
          type="checkbox"
          id = {getId()}
          onChange = {(e) => handleChange(e.target.id, e)}
        />
      </>
    )
  }
export default RadioButton;



