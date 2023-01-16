import { stringify } from 'querystring'
import React, { useState } from 'react'

const AddToList = () =>{

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    return(
        <div className='AddToList'>
            <input
            type='text'
            placeholder= 'Name'
            value={input.name}
            onChange = {handleChange}
            name= "name"
            className="AddToList-input"
            />

            <input
            type='text'
            placeholder= 'Age'
            value={input.age}
            onChange = {handleChange}
            name= "age"
            className="AddToList-input"
            />

            <input
            type='text'
            placeholder= 'Image Url'
            onChange = {handleChange}
            name= 'img'
            value={input.img}
            className="AddToList-input"
            />

            <textarea
            placeholder= 'Note'
            value={input.note}
            name= 'note'
            onChange = {handleChange}
            className="AddToList-input"
            />

        </div>
    )
}

export default AddToList