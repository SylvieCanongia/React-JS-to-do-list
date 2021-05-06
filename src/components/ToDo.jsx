import React from 'react'
import iconChecked from "../assets/images/iconChecked.png"


class ToDo extends React.Component {
    render() {
        return (
            <li className="list-group">
                {this.props.task.name}
                <button className="button button-checked"><img src={iconChecked} alt="Icon checked" /></button>
            </li>
        )
    }
}

export default ToDo;