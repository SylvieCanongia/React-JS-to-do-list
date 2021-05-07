import React from 'react'
import '../styles/AddTask.css'

const AddTask = () => (
    <>
        <main>
            <h2>Nouvelle tâche</h2>
            <div className="form-card">
                <form className="form-body">
                    <div className="form-group">
                        <label for="task-name" className="form-label">Nom de la tâche </label>
                        <input type="text" id="task-name" className="task-name form-input" name="Nom" required/>
                    </div>
                    <button type="submit" className="button form-button">Créer la tâche</button>
                </form>
            </div>
        </main>
    </>
)

export default AddTask;