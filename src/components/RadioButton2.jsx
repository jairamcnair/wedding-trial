import "./../styles/ledger2.css";
import {useState, useEffect} from 'react';
import { useRef } from 'react';
//import Budget from './Budget'
import { useId } from 'react';
// handling events - https://legacy.reactjs.org/docs/handling-events.html

const RadioButton2 = ({ label }) => {
  
  let ref = useRef(0);

      function getId(){
        const id = useId()
        return id
      }

      const [toggle, setToggle] = useState(null)
    /*const [toggle, setToggle] = useState(false, () => {
      const saved = localStorage.getItem("toggle"); 
      const initialValue = JSON.parse(saved); return initialValue || "";
      }
    );
    useEffect(localStorage.setItem('toggle', toggle))*/

      /*function handleClick(id, e){
        console.log("you clicked input - " + id)
        setToggle(!toggle);
        console.log(toggle)
      }*/
      //onClick={(e) => handleClick(e.target.id, e)}

      function handleClick(toggleparam){
        console.log(id)
          console.log(toggleparam)
      }
   return (
        <>
          <div className="diy-radio-container" id={getId()} >
          <button onClick={() => handleClick(toggle)}>Click </button>
            {toggle && (
                <div className="diy-radio-on" id={getId()} > O </div>
            )}
          </div>
        </>
      )
  

}
export default RadioButton2;

