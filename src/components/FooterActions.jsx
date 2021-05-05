import React from 'react'
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa' /*import of font-awesome icons */
import {Link} from 'react-router-dom'
import { IconContext } from "react-icons";
import '../styles/FooterActions.css'

function FooterActions () {
    return [
        <>
            <footer className="stretched-footer">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div className="footer-buttons-container">
                        <div>
                            <Link to="/" className="button" alt="Liste" ><FaListUl /></Link>
                            <Link to="/completed" className="button" alt="Complétées"><FaCheck /></Link>
                            <Link to="/add-task" className="button" alt="Ajouter"><FaPlus /></Link>
                        </div>
                        <div>
                            <a href="#" className="button" alt="Supprimer"><FaTrashAlt /></a>
                        </div>
                    </div>
                </IconContext.Provider>
            </footer>
        </>
    ]
}

export default FooterActions;