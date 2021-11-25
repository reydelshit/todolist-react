import React, { useState } from 'react'

const App = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')

    function submitHandler(y) {
        y.preventDefault()

        const saveTodo = {
            id: new Date().getTime(),
            title: todo,
            status: false,
        }

        setTodos([...todos.concat(saveTodo)])
        setTodo('')
    }

    function remove(id) {
        const newTodo = [...todos].filter((hey) => hey.id !== id)

        setTodos(newTodo)
    }

    return ( 
        <div className="main">
           <form onSubmit={submitHandler}>
               <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo}/>
            
               <button type='submit'>Add</button>
           </form>
           {todos.map((hey) => 
           <div key={hey.id}>
               <div>{hey.title}</div>
               <button onClick={() => remove(hey.id)}
                >Delete</button>
            </div>)}
        </div>
     );
}
 
export default App;