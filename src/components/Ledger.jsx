import "./../styles/ledger.css";
import {useState, useEffect} from 'react';
import Budget from './Budget'

function Ledger(){

    let initialBudget = localStorage.getItem("foodFacilityBudget");
    /* *************************************************** */
    const [ceremonyVenueCost, setCeremonyVenueCost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("ceremonyVenueCost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('ceremonyVenueCost', JSON.stringify(ceremonyVenueCost));
      }, [ceremonyVenueCost]);

      /* *************************************************** */
      /* *************************************************** */
    const [ceremonyVenueDate, setCeremonyVenueDate] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("ceremonyVenueDate");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('ceremonyVenueDate', JSON.stringify(ceremonyVenueDate));
      }, [ceremonyVenueDate]);

      /* *************************************************** */
      /* *************************************************** */
    const [cocktailVenueCost, setCocktailVenueCost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("cocktailVenueCost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('cocktailVenueCost', JSON.stringify(cocktailVenueCost));
      }, [cocktailVenueCost]);
      /* *************************************************** */
    const [cocktailVenueDate, setCocktailVenueDate] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("cocktailVenueDate");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('cocktailVenueDate', JSON.stringify(cocktailVenueDate));
      }, [cocktailVenueDate]);

      /* *************************************************** */
      /* *************************************************** */
    const [receptionVenueCost, setReceptionVenueCost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("receptionVenueCost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('receptionVenueCost', JSON.stringify(receptionVenueCost));
      }, [receptionVenueCost]);
      /* *************************************************** */
    const [receptionVenueDate, setReceptionVenueDate] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("receptionVenueDate");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('receptionVenueDate', JSON.stringify(receptionVenueDate));
      }, [receptionVenueDate]);

      /* *************************************************** */
      /* *************************************************** */
    const [eventInsuranceCost, setEventInsuranceCost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("eventInsuranceCost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('eventInsuranceCost', JSON.stringify(eventInsuranceCost));
      }, [eventInsuranceCost]);
      /* *************************************************** */
    const [eventInsuranceDate, setEventInsuranceDate] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("eventInsuranceDate");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('eventInsuranceDate', JSON.stringify(eventInsuranceDate));
      }, [receptionVenueDate]);

      /* *************************************************** */
      /* *************************************************** */
    const [decorCost, setDecorCost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("decorCost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('decorCost', JSON.stringify(decorCost));
      }, [decorCost]);
      /* *************************************************** */
    const [decorDate, setDecorDate] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("decorDate");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('decorDate', JSON.stringify(decorDate));
      }, [decorDate]);

      /* *************************************************** */
      /* *************************************************** */
    const [userInput1Cost, setUserInput1Cost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInput1Cost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      useEffect(() => {
        localStorage.setItem('userInput1Cost', JSON.stringify(userInput1Cost));
      }, [userInput1Cost]);

      const [userInput1, setUserInput1] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInput1");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      useEffect(() => {
        localStorage.setItem('userInput1', JSON.stringify(userInput1));
      }, [userInput1]);


      /* *************************************************** */
    const [userInput1Date, setUserInput1Date] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInput1Date");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      useEffect(() => {
        localStorage.setItem('userInput1Date', JSON.stringify(userInput1Date));
      }, [userInput1Date]);

      /* *************************************************** */
       /* *************************************************** */
    const [userInput2Cost, setUserInput2Cost] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInput2Cost");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      useEffect(() => {
        localStorage.setItem('userInput2Cost', JSON.stringify(userInput2Cost));
      }, [userInput2Cost]);

      const [userInput2, setUserInput2] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInput2");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });

      useEffect(() => {
        localStorage.setItem('userInput2', JSON.stringify(userInput2));
      }, [userInput2]);
      /* *************************************************** */
    const [userInput2Date, setUserInput2Date] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("userInput2Date");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      });
      useEffect(() => {
        localStorage.setItem('userInput2Date', JSON.stringify(userInput2Date));
      }, [userInput2Date]);

      /* *************************************************** */
      /* *************************************************** */

    return (
        <>
            <h1> Facility & Food Ledger </h1>
            <div id="ledger-container">
                <div className="row" id="title-row">
                    <div className="title row-inner"><h1>Facility</h1></div>
                    <div className="title row-inner"><p>Deposits</p></div>
                    <div className="title row-inner"><p>Expenses</p></div>
                    <div className="title row-inner"><p>Date Bought</p></div>
                </div>
                <div className="row" id="initial-budget-row">
                    <div className="title row-inner"><p>Initial Budget</p></div>
                    <div className="deposit row-inner">
                        <div className="row-inner-inner">
                            <span>+$</span><p>{localStorage.getItem("foodFacilityBudget")}</p>
                        </div>
                    </div>
                    <div className="expense row-inner"><p></p></div>
                    <div className="date row-inner"></div>
                </div>
                <div className="row" id="ceremony-venue-row">
                    <div className="title row-inner"><p>Ceremony Venue</p></div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={ceremonyVenueCost}
                                onChange = {(e) => setCeremonyVenueCost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div"><p>{initialBudget - ceremonyVenueCost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={ceremonyVenueDate}
                            onChange = {(e) => setCeremonyVenueDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" id="cocktail-venue-row">
                    <div className="title row-inner"><p>Cocktail Hour Venue</p></div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={cocktailVenueCost}
                                onChange = {(e) => setCocktailVenueCost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div"><p>{initialBudget - ceremonyVenueCost - cocktailVenueCost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={cocktailVenueDate}
                            onChange = {(e) => setCocktailVenueDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" id="reception-venue-row">
                    <div className="title row-inner"><p>Reception Venue</p></div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={receptionVenueCost}
                                onChange = {(e) => setReceptionVenueCost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div"><p>{initialBudget - ceremonyVenueCost - cocktailVenueCost - receptionVenueCost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={receptionVenueDate}
                            onChange = {(e) => setReceptionVenueDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" id="event-insurance-row">
                    <div className="title row-inner"><p>Event Insurance</p></div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={eventInsuranceCost}
                                onChange = {(e) => setEventInsuranceCost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div">
                            <p>{initialBudget - ceremonyVenueCost - cocktailVenueCost - receptionVenueCost - eventInsuranceCost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={eventInsuranceDate}
                            onChange = {(e) => setEventInsuranceDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" id="decor-row">
                    <div className="title row-inner">
                        <p>Decor</p>
                        <p className="note">(see 'Non-Floral Decor' checklist)</p>
                    </div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={decorCost}
                                onChange = {(e) => setDecorCost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div">
                            <p>{initialBudget - ceremonyVenueCost - cocktailVenueCost - receptionVenueCost - eventInsuranceCost - decorCost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={decorDate}
                            onChange = {(e) => setDecorDate(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" id="user-input-row-1">
                    <div className="title row-inner">
                        <input 
                            type="text" 
                            value={userInput1}
                            onChange = {(e) => setUserInput1(e.target.value)}
                        />
                    </div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={userInput1Cost}
                                onChange = {(e) => setUserInput1Cost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div">
                            <p>{initialBudget - ceremonyVenueCost - cocktailVenueCost - receptionVenueCost - eventInsuranceCost - decorCost - userInput1Cost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={userInput1Date}
                            onChange = {(e) => setUserInput1Date(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row" id="user-input-row-2">
                    <div className="title row-inner">
                        <input 
                            type="text" 
                            value={userInput2}
                            onChange = {(e) => setUserInput2(e.target.value)}
                        />
                    </div>
                    <div className="deposit row-inner"><span></span><p></p></div>
                    <div className="expense row-inner">
                        <div className="row-inner-inner">
                            <span>-$</span>
                            <input 
                                type="number"
                                value={userInput2Cost}
                                onChange = {(e) => setUserInput2Cost(e.target.value)}
                            />
                        </div>
                        <div className="leftover-div">
                            <p>{initialBudget - ceremonyVenueCost - cocktailVenueCost - receptionVenueCost - eventInsuranceCost - decorCost - userInput1Cost - userInput2Cost}</p></div>
                    </div>
                    <div className="date row-inner">
                        <input 
                            type="date"
                            value={userInput2Date}
                            onChange = {(e) => setUserInput2Date(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ledger;