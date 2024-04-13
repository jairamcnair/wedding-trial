import "./../styles/ledger.css";
import {useState, useEffect} from 'react';
import Budget from './Budget'

function Ledger(){

    return (
        <>
            <div id="ledger-container">
                <div className="title"><p>Food & Facility</p></div>
                <div className="row" id="title-row">
                    <div className="title"><p></p></div>
                    <div className="title"><p>Deposit</p></div>
                    <div className="title"><p>Expenses</p></div>
                    <div className="title"><p>Date Bought</p></div>
                </div>
                <div className="row" id="initial-budget-row">
                    <div className="title"><p>Initial Budget</p></div>
                    <div className="title"><p>{localStorage.getItem("foodFacilityBudget")}</p></div>
                    <div className="title"><p>Expenses</p></div>
                    <div className="title"><p>Date Bought</p></div>
                </div>
            </div>
        </>
    )
}

export default Ledger;