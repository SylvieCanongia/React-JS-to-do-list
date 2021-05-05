import React from 'react'

const AddTask = () => (
    <>
        <main>
            <h2 className="header-new-task">Nouvelle tâche</h2>
            <div className="form-card">
                <form className="form-body">
                    <div className="form-fields">
                        <label for="taskName">Nom de la tâche : </label>
                        <input type="text" id="taskName" className="form-input-taskName" name="Nom" value="" required/>
                    </div>
                    <button type="submit" className="button button-primary">Créer</button>
                </form>
            </div>
        </main>
    </>
)

export default AddTask;