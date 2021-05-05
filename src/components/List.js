import React from 'react'
import '../styles/List.css'
import iconChecked from "../assets/images/iconChecked.png"

function List () {
    return [

        <main>
            <ul>
                <li className="list-group">
                    Trouver un super job de développeuse
                    <button className="button button-checked"><img src={iconChecked} alt="Icon checked" /></button>
                </li>
                <li className="list-group">
                    Ranger ma chambre
                    <button className=" button button-checked"><img src={iconChecked} alt="Icon checked" /></button>
                </li>
                <li className="list-group">
                    Faire des câlins aux chats
                    <button className="button button-checked"><img src={iconChecked} alt="Icon checked" /></button>
                </li>
            </ul> 
        </main>
    ]
}

export default List;