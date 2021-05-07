import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import initialData from '../initialData'
import Banner from './Banner'
import ToDoList from './ToDoList'
import FooterActions from './FooterActions'
import AddTask from './AddTask'
import '../styles/App.css'


class App extends React.Component {

    state = {
        tasks: initialData
    }

    // modify the task
    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(prevState => (
            prevState.tasks.map(task => {

                // create the new version of the task property
                return task.id === taskId ? taskToUpdate : task
            })
        ))
    }

    render() {
        return (
            <>
                <div className="page-container">
                    <div className="streched-container">
                        <div className="to-do-list-container">
                            <Router>
                                <Banner />
                                <Switch>
                                    <Route path="/add-task">
                                        <AddTask />
                                    </Route>
                                    {/* property onToggleCompleted is passed to the component ToDoList*/}
                                    <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                                </Switch>
                                <FooterActions />
                            </Router>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;