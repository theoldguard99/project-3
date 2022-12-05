import React from 'react';

const TodoList = ({todos, setTodos}) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {...item, done: !item.done}
                }
                return item
            })
        )
    }

  return (
    <div>
        {todos.map((todo) => (
            <li className='todo-list' key={todo.id}>
                <input 
                    type="text" 
                    value={todo.title} 
                    className="list"
                    onChange={(event) => event.preventDefault()} 
                />
                <div>
                    <button className='button-complete' onClick={() => handleComplete(todo)}>
                    Done
                    </button>
                    <button className='button-delete' onClick={() => handleDelete(todo)}>
                    Delete
                    </button>
                </div>
            </li>         
        ))}
        
    </div>
  )
}

export default TodoList