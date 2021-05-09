import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import initialData from '../initialData'
import Banner from './Banner'
import ToDoList from './ToDoList'
import FooterActions from './FooterActions'
import AddTask from './AddTask'
import '../styles/App.css'
import uniqueid from 'uniqueid'


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

    // create new task
    onAddTask = (newTaskName) => {
        let newTask = {
            id: uniqueid(),
            name: newTaskName,
            completed: false
        }

        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    onDeleteCompleted = () => {
        this.setState(prevState => {
            let newState = prevState.tasks.filter(task => !task.completed)
            return {
                tasks: newState
            }
        })
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
                                    <Route path="/add-task" render={(props) => <AddTask {...props} onAddTask={this.onAddTask} />} />
                                        
                                    {/* property onToggleCompleted is passed to the component ToDoList*/}
                                    <Route path="/:filter?" render={(props) => <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                                </Switch>
                                <FooterActions onDeleteCompleted={this.onDeleteCompleted} />
                            </Router>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;