import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import initialData from '../initialData'
import Banner from './Banner'
import ToDoList from './ToDoList'
import FooterActions from './FooterActions'
import AddTask from './AddTask'
import '../styles/App.css'



const App = () => (
    <> {/* React.Fragment */}
        <div className="page-container">
            <div className="streched-container">
                <div className="to-do-list-container">
                    <Router>
                        <Banner />
                        <Switch>
                            <Route path="/add-task">
                                <AddTask />
                            </Route>
                            <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={initialData}/>} />
                        </Switch>
                        <FooterActions />
                    </Router>
                </div>
            </div> 
        </div>
    </>
)

export default App;