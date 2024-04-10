// Page Function: NAVIGATION COMPONENT App.jsx

// classes
import * as React from 'react'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'

// css file(s)
import './App.css'
import './AppAdaptive.css'


// navigation page components
import Home from './components/Home'
import About from './components/About'



class App extends React.Component {
    render(){
        return(
            <Router>
                <body>
                    <nav>
                        <div id="h1-div"> <h1> Wedding Checklist Overview </h1> </div>
                        <div className="nav-inner-1">
                            <div className="p-div"> <p> Budget & Guest List </p> </div>
                            <div className="a-div"> <Link to="/home"> Budget </Link> </div>
                            <div className="a-div"> <Link to="/about"> Guest List </Link> </div>
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
                            <Route path="/about" element={<About></About>}/>
                        </Routes>
                    </div>
                    
                </body>
            </Router>
        );
    }
}

export default App;



/*
source: https://www.youtube.com/watch?v=tiZyMxanNDU&t=53s - for changing port from 5173 to something else (in vite.config.js file)...
*/