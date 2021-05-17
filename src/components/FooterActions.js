import React from 'react'
import {FaListUl, FaCheck, FaPlus, FaTrashAlt} from 'react-icons/fa' /*import of font-awesome icons */
import {Link} from 'react-router-dom'
import { IconContext } from "react-icons";
import '../styles/FooterActions.css'

const FooterActions = ({onDeleteCompleted}) => (
        <>
            <footer className="stretched-footer">
                <IconContext.Provider value={{ className: 'react-icons' }}>
                    <div className="footer-buttons-container">
                        <div>
                            <Link to="/" className="button" alt="Liste" exact="true"><FaListUl /></Link>
                            <Link to="/completed" className="button" alt="Complétées"><FaCheck /></Link>
                            <Link to="/add-task" className="button" alt="Ajouter" exact="true" ><FaPlus /></Link>
                        </div>
                        <div>
                            <a className="button" alt="Supprimer" onClick={onDeleteCompleted} ><FaTrashAlt /></a>
                        </div>
                    </div>
                </IconContext.Provider>
            </footer>
        </>
)

export default FooterActions;