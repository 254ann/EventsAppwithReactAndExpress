import React, { useState } from 'react'
import axios from "axios"

function AddEventComponent() {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/api/events', {
                title, imageUrl,description,date,location,
            });
            console.log('Event created succesfully')
        }
        catch(error){
            console.log('Failed to create event')
        }
    };

  return (
    <div className='addEventForm'>
        <h1>Add Event</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div>
                <label>Image URL</label>
                <input type="text"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)} />
            </div>

            <div>
                <label>Description</label>
                <textarea value={description}
                onChange={(e) => setDescription(e.target.value)}>
                </textarea>
                </div>

                <div>
                    <label>Date</label>
                    <input type="datetime-local"
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div>
                    <label>Location</label>
                    <input type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
                </div>
                <button type='submit'>Add Event</button>
            
        </form>
      
    </div>
  )
}

export default AddEventComponent

