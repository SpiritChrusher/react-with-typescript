import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps{
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps>= ({ people, setPeople }) => {

    const [input, setInput] = useState({
        name:"",
        age:"",
        notes:"",
        img:"",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
    {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void =>
    {
        if(!input.name || !input.age || !input.img)
        return

        setPeople([...people,{
            name: input.name,
            age: parseInt(input.age),
            img: input.img,
            note: input.notes
        }]);

        setInput({
        name:"",
        age:"",
        notes:"",
        img:"",
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

            <button className="AddToList-btn"
            onClick={handleClick}>
                Add to List</button>
        </div>
    )
}

export default AddToList