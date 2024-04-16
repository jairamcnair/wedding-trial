import "./../styles/ledger2.css";
import {useState, useEffect} from 'react';
import { useRef } from 'react';
//import Budget from './Budget'


const RadioButton = () => {

  // source: https://www.freecodecamp.org/news/toggle-elements-in-react-using-hooks/ - toggling
  

  const [color, setColor] = useState(() => {
    const saved = localStorage.getItem("color"); 
    const initialValue = JSON.parse(saved); return initialValue || "";
    }
  );
  useEffect(() => {localStorage.setItem('color', JSON.stringify(color));},[color]);

  const [click, setClick] = useState(() => {
    const saved = localStorage.getItem("click"); 
    const initialValue = JSON.parse(saved); return initialValue || "";
    }
  );
  useEffect(() => {localStorage.setItem('click', JSON.stringify(click));},[click]);

  let ref = useRef(0); // source: https://react.dev/reference/react/useRef

  function handleClick(e){
    ref.current = ref.current + 1;
        if(ref.current % 2 === 0){
          console.log("clicks -" + ref.current)
          setColor('white')
          setClick(ref.current)
          e.target.style.backgroundColor = color //evt.target.style.visibility = "hidden"; - source: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
        }
        else{
          setColor('red')
          setClick(ref.current)
          console.log("clicks -" + ref.current)
          e.target.style.backgroundColor = color;
        }
    }
   

  /*
      const [radioId, setRadioId] = useState(() => {
        const saved = localStorage.getItem("radioId"); 
        const initialValue = JSON.parse(saved); return initialValue || "";
        }
      );useEffect(() => {localStorage.setItem('radioId', JSON.stringify(radioId));},[radioId]);

    const [color, setColor] = useState("") 
    useEffect(() => {localStorage.setItem('color', JSON.stringify(color));},[color]);

    const [toggle, setToggle] = useState(() => {
      const saved = localStorage.getItem("toggle"); 
      const initialValue = JSON.parse(saved); return initialValue || "";
      }
    );useEffect(() => {localStorage.setItem('toggle', JSON.stringify(toggle));},[toggle]);
    /*const handleClick = () => {
      setToggle(!toggle);
      console.log(toggle)
    };*/
    /*const [toggle, setToggle] = useState(() => {
      const saved = localStorage.getItem("toggle"); 
      const initialValue = JSON.parse(saved); return initialValue || "";
      }
    );useEffect(() => {localStorage.setItem('toggle', JSON.stringify(toggle));},[toggle]);
    function handleClick(event){
      setToggle(!toggle)
    }*/


    return (
      <>
        <div className="diy-radio-container" onClick={handleClick} id={Math.floor(Math.random() * 100) + 1}>
         
              <div 
              className="diy-radio" 
              id = {Math.floor(Math.random() * 100) + 1 } 
              >
            </div>
        
        </div>
      </>
    )
  }

export default RadioButton;

/* 

*/
