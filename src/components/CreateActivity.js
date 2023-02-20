import React, { useState } from 'react';
import { createActivity } from './api';

const createActivity = () => {

const [name, setName] = useState('')

const [description, setDescription] = useState('')

    return(
 <form className='createActivity'>

    <h3>Create an Activity</h3>

                <input 
                    placeholder='name'
                    value={ name } 
                    onChange={ ev => setName(ev.target.value)} 
                />

                <input 
                    placeholder='description'
                    value={ description } 
                    onChange={ ev => setDescription(ev.target.value)} 
                />

                <button onClick={ (ev) => createActivity(name, description, ev) } disabled={ !name || !description }>Create Activity</button>
 </form>
    )
}

export default CreateActivity
