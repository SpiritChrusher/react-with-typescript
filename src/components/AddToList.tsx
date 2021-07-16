import React, { useState } from 'react'

const AddToList = () => {

    const [input, setInput] = useState({
        name:"",
        age:"",
        notes:"",
        img:"",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="AddToList">
            <input placeholder="Name"
            type="text"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"/>

            <input placeholder="Age"
            type="text"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"/>

            <input placeholder="Image url"
            type="text"
            className="AddToList-input"
            value={input.img}
            onChange={handleChange}
            name="img"/>

            <textarea placeholder="Notes"           
            className="AddToList-input"
            value={input.notes}
            onChange={handleChange}
            name="notes"/>
        </div>
    )
}

export default AddToList