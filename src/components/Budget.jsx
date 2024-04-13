import "./../styles/budget.css";
import {useState, useEffect} from 'react';

function Budget() {

    // local storage source: https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/ 
    // local storage source: https://blog.logrocket.com/using-localstorage-react-hooks/
      const [budget, setBudget] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("budget");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('budget', JSON.stringify(budget));
      }, [budget]);

      /* *************************************************** */
      const [foodFacilityPercentage, setFoodFacilityPercentage] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("foodFacilityPercentage");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('foodFacilityPercentage', JSON.stringify(foodFacilityPercentage));
      }, [foodFacilityPercentage]);

      /* *************************************************** */
      const [foodFacilityBudget, setFoodFacilityBudget] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("foodFacilityBudget");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('foodFacilityBudget', JSON.stringify(calculateBudget(budget, foodFacilityPercentage)));
      }, [foodFacilityBudget]);
        /* *************************************************** */
      
      function calculateBudget(budget, percentage){
        let solution = budget * (percentage / 100)
        return solution;
      }
    return(
        <>
        <div id="main-container">
            <form className="budget-input-container">
                <div className="dollar-sign-div">$</div>
                <div className="input-div">
                    <input 
                        type="number" 
                        className="budget-input-element" 
                        placeholder="Your budget"  
                        value={budget}
                        onChange = {(e) => setBudget(e.target.value)}
                    />
                </div>
            </form>

            <form className="percentage-input">
                <div className="percentage-input-container">
                    <div className="color-key-div">
                        <div className="color-key" id="food-facility-color-key"></div>
                    </div>
                    <div className="percentage-input-div">
                        <p> Food & Facility </p>
                        <sup> 
                            <input 
                                type="number" 
                                className="superscript" 
                                placeholder="Your budget"  
                                value={foodFacilityPercentage}
                                onChange = {(e) => setFoodFacilityPercentage(e.target.value)}
                            /><span>%</span>
                        </sup>
                    </div>
                </div>
                <div className="calculated-section-budget-div">
                    <span>$</span><p>{calculateBudget(budget,foodFacilityPercentage)}</p>
                </div>
            </form>
        </div>
        </>
    )
}
export default Budget;