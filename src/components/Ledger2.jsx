import "./../styles/ledger2.css";
import {useState, useEffect} from 'react';
//import Budget from './Budget'
import RadioButton from './RadioButton'

function Ledger2(){ // expense component - add this when the user clicks the "add expense" button

    const [ceremonyVenueCost, setCeremonyVenueCost] = useState(() => {
        const saved = localStorage.getItem("ceremonyVenueCost"); 
        const initialValue = JSON.parse(saved); return initialValue || "";
        }
    ); useEffect(() => {localStorage.setItem('ceremonyVenueCost', JSON.stringify(ceremonyVenueCost));},[ceremonyVenueCost]);
    
    const [ceremonyVenueDate, setCeremonyVenueDate] = useState(() => {
        const saved = localStorage.getItem("ceremonyVenueDate"); 
        const initialValue = JSON.parse(saved); return initialValue || "";
        }
    ); useEffect(() => {localStorage.setItem('ceremonyVenueDate', JSON.stringify(ceremonyVenueDate));},[ceremonyVenueDate]);
    
    return(
        <>
            <div id="container">
                <div className="radio-div">
                    <div className="row-inner-inner"> 
                        <RadioButton/>
                    </div>
                </div>
                <div className="row-inner">
                    <div className="row-inner-inner"> Ceremony Venue </div>
                </div>
                <div className="row-inner deposit">
                    
                </div>
                <div className="row-inner expense">
                    <div className="row-inner-inner">
                        <div className="prefix-container">
                            <div className="prefix-container-inner"> - </div>
                            <div className="prefix-container-inner"> $ </div>
                        </div>
                        <div className="negative-input">
                            <input 
                                type="number"
                                value={ceremonyVenueCost}
                                onChange = {(e) => setCeremonyVenueCost(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="row-inner date">
                    <div className="row-inner-inner">
                        <div className="date-input">
                            <input 
                                type="date"
                                value={ceremonyVenueDate}
                                onChange = {(e) => setCeremonyVenueDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <RadioButton/>
        </>
    )
}

export default Ledger2;