import React from 'react'
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa' /*import of font-awesome icons */
import { IconContext } from "react-icons";
import '../styles/FooterActions.css'

function FooterActions () {
    return [
        <>
            <footer className="stretched-footer">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div className="footer-buttons-container">
                        <div className="">
                            <a href="#" className="button" alt="Liste" ><FaListUl /></a>
                            <a href="#" className="button" alt="Complétées"><FaCheck /></a>
                            <a href="#" className="button" alt="Ajouter"><FaPlus /></a>
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