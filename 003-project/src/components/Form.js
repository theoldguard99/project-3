import React from 'react';
import { v4 as uuidv4 } from "uuid";

const Form = ({input, setInput, todos, setTodos}) => {
    const onInputChange = (event) => {
        setInput(event.target.value)
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, 
            {
                id: uuidv4(), 
                title: input, 
                done: false
            }
        ]);
        setInput("");
    };

  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="Enter a task..." 
                className="task-input"
                value={input}
                required
                onChange={onInputChange}
            />
            <button className="button-add" type="submit">Add</button>
        </form>
    </div>
  )
}

export default Form