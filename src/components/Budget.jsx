import "./../styles/budget.css";
import {useState, useEffect} from 'react';

function Budget() {

    // local storage source: https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/ 
    // local storage source: https://blog.logrocket.com/using-localstorage-react-hooks/ 
    //const [budget, setBudget] = useState([]);
    
      const [budget, setBudget] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("budget");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(budget));
      }, [budget]);

      
    return(
        <>
            <form className="money-input-container">
                <div className="dollar-sign-div">$</div>
                <div className="input-div">
                    <input 
                        type="number" 
                        className="money-input-element" 
                        placeholder="Your budget"  
                        value={budget}
                        onChange = {(e) => setBudget(e.target.value)}
                    />
                </div>
                <div className="btn-div">
                    <button className="money-button-element"> update </button>
                </div>
            </form>
        </>
    )
}

export default Budget;