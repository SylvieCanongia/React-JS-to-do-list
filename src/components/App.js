import React from 'react'
import Banner from './Banner'
import ToDoList from './ToDoList'
import FooterActions from './FooterActions'
import '../styles/App.css'


const App = () => (
    <> {/* React.Fragment */}
        <div className="page-container">
            <div className="streched-container">
                <div className="to-do-list-container">

                    <Banner />

                    <ToDoList />

                    <FooterActions />

                </div>
            </div> 
        </div>
    </>
)

export default App;