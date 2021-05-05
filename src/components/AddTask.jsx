import React from 'react'
import '../styles/AddTask.css'

const AddTask = () => (
    <>
        <main>
            <h2>Nouvelle tâche</h2>
            <div class="form-card">
                <form class="form-body">
                    <div class="form-group">
                        <label for="task-name" class="form-label">Nom de la tâche </label>
                        <input type="text" id="task-name" class="task-name form-input" name="Nom" value="" required/>
                    </div>
                    <button type="submit" class="button form-button">Créer la tâche</button>
                </form>
            </div>
        </main>
    </>
)

export default AddTask;