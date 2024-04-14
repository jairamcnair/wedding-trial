// Page Function: NAVIGATION COMPONENT App.jsx

// classes
import * as React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

// css file(s)
import './App.css'
import './AppAdaptive.css'


// navigation page components
import Home from './components/Home'
import Budget from './components/Budget'
import Ledger from './components/Ledger'
import Ledger2 from './components/Ledger2'
import LedgerExpense from './components/LedgerExpense'
import LedgerDeposit from './components/LedgerDeposit'



class App extends React.Component {
    render(){
        return(
            <Router>
                <div>
                    <nav>
                        <div id="h1-div"> <h1> Wedding Checklist Overview </h1> </div>
                        <div className="nav-inner-1">
                            <div className="p-div"> <p> Budget & Guest List </p> </div>
                            <div className="a-div"> <Link to="/budget"> Budget </Link> </div>
                            <div className="a-div"> <Link to="/ledger"> Ledger </Link> </div>
                            <div className="a-div"> <Link to="/ledger2"> Ledger2 </Link> </div>
                            <div className="a-div"> <Link to="/ledgerExpense"> Ledger Expense </Link> </div>
                            <div className="a-div"> <Link to="/ledgerDeposit"> Ledger Deposit </Link> </div>
                        </div>
                        <div className="nav-inner-1">
                            <div className="p-div"> <p> Facility + Food </p> </div>
                            <div className="a-div"> <Link to="/home"> Facility </Link> </div>
                            <div className="a-div"> <Link to="/about"> Food </Link> </div>
                        </div>
                        <div className="nav-inner-1">
                            <div className="p-div"> <p> Function + Entertainment </p> </div>
                            <div className="a-div"> <Link to="/home"> Vendor Checklist </Link> </div>
                        </div>
                        <div className="nav-inner-1">
                            <div className="p-div"> <p> Fashion </p> </div>
                            <div className="a-div"> <Link to="/home"> Apparel Checklist </Link> </div>
                        </div>
                        <div className="nav-inner-1">
                            <div className="p-div"> <p> Festivities, Gifts, + Supplies </p> </div>
                            <div className="a-div"> <Link to="/home"> Supplies Checklist </Link> </div>
                            <div className="a-div"> <Link to="/about"> Bridal Party Gifts </Link> </div>
                            <div className="a-div"> <Link to="/about"> Festivity Planning </Link> </div>
                        </div>
                    </nav>
                    <div id="page">
                        <Routes>
                            <Route path="/home" element={<Home></Home>}/>
                            <Route path="/budget" element={<Budget></Budget>}/>
                            <Route path="/ledger" element={<Ledger></Ledger>}/>
                            <Route path="/ledger2" element={<Ledger2></Ledger2>}/>
                            <Route path="/ledgerExpense" element={<LedgerExpense></LedgerExpense>}/>
                            <Route path="/ledgerDeposit" element={<LedgerDeposit></LedgerDeposit>}/>
                        </Routes>
                    </div>
                    
                </div>
            </Router>
        );
    }
}

export default App;



/*
source: https://www.youtube.com/watch?v=tiZyMxanNDU&t=53s - for changing port from 5173 to something else (in vite.config.js file)...
*/