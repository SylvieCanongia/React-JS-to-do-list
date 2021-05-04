import React from 'react'
import Banner from './Banner'
import List from './List'
import FooterActions from './FooterActions'
import '../styles/App.css'


function App () {
    return [
        <div className="page-container">
        <div className="streched-container">
            <div className="to-do-list-container">

                <Banner />

                <List />

                <FooterActions />

            </div>
        </div> 
    </div>
    ]
}

export default App;