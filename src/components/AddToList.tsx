import React, { useState } from 'react'
import {IState as Props} from '../App'

interface IProps {
    people: Props['people'],
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const AddToList: React.FC<IProps> = ({people, setPeople}) =>{

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void =>{
        if(
            !input.name || !input.age || !input.img
        ){
            return
        }
        setPeople([
            ...people,
            {
                name:input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note
            }
        ])

        setInput({
            name: "",
            age: "",
            note: "",
            img: ""
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
        
            <button className='AddToList-btn'
                onClick = {handleClick}
            >
                Add to list
            </button>
        </div>
    )
}

export default AddToList