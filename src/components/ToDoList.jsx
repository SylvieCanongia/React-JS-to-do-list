import React from 'react'
import ToDo from './ToDo'
import '../styles/ToDoList.css'

// access to properties tasks and match
const ToDoList = ({tasks, match}) => {
    let filteredTasks;

    // see when the filter = 'completed' or 'undefined'
    switch (match.params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed)
        break;
        default:
            filteredTasks = tasks
    }

    // is filteredTasks empty ?
    if(filteredTasks.length === 0) {
        return (
            <>
                <main>
                    <ul>
                        <li className="list-group">Aucune tâche à afficher</li>
                    </ul> 
                </main>
            </>
        )
    } else {
        return (
            <>
                <main>
                    <ul>
                        {
                            filteredTasks.map((task) => <ToDo taskData={task} key={task.id}/>)
                        }
                    </ul> 
                </main>
            </>
        )
    }
}

export default ToDoList;