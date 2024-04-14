import "./../styles/ledger2.css";
import {useState, useEffect} from 'react';
//import Budget from './Budget'

function LedgerExpense(){ // expense component - add this when the user clicks the "add expense" button

    
    return(
        <>
            <div id="container">
                <div className="radio-div">
                    <div className="row-inner-inner"> 
                        <input
                            className="radio-input"
                            type="radio"
                        />
                    </div>
                </div>
                <div className="row-inner">
                    <div className="row-inner-inner"> 
                        <input
                            className="item-name-input"
                            type="text"
                        />
                    </div>
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
                            <input />
                        </div>
                    </div>
                </div>
                <div className="row-inner date">
                    <div className="row-inner-inner">
                        <div className="date-input">
                            <input type="date"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LedgerExpense;