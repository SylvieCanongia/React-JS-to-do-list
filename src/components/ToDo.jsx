import React from 'react'
import { BiCheck, BiSmile } from "react-icons/bi";
// import iconChecked from "../assets/images/iconChecked.png"



class ToDo extends React.Component {

    state = {
        completed: this.props.taskData.completed /* gets the initial state of the property completed into the props taskData*/
    }

    toggleCompleted = () => {
        /* toggle the previous state to the opposite state */
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
    }

    render() {
        return (
            <li className={"list-group " + (this.state.completed? "success" : null)}>
                {this.props.taskData.name}
                <button className={"button button-checked " + (this.state.completed? "success-checked" : null)} onClick={() => this.toggleCompleted()}> <BiCheck /> </button>
            </li>
        )
    }
}

export default ToDo;