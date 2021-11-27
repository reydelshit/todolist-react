import React, { useState, useEffect } from 'react'
import './style.css'
import Footer from './Footer'

import { faTrash, faEdit, faPaperPlane, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const App = () => {

    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState('')
    const [edit, setEdit] = useState(null)
    const [editText, setEditText] = useState('')


    useEffect(() => {
        const localPreHolder = localStorage.getItem('data')
        const localSavedTodos = JSON.parse(localPreHolder)

        if(localSavedTodos){
            setTodos(localSavedTodos)
        }
    }, [])


    useEffect(()=> {
        const localHolder = JSON.stringify(todos)
        localStorage.setItem('data', localHolder)
    }, [todos])


    function submitHandler(y) {
        y.preventDefault()

        const saveTodo = {
            id: new Date().getTime(),
            title: todo,
            status: false,
        }

        if(!(todo === '')){
            setTodo()
        } else {
            return todo
        }

        setTodos([...todos.concat(saveTodo)])
        setTodo('')
    }

    function remove(id) {
        const newTodo = [...todos].filter((hey) => hey.id !== id)

        setTodos(newTodo)
    }

    function update(id){

        const updateTodo = [...todos].map((bago) => {
            if(bago.id === id){
                bago.status = !bago.status
            }
            return bago
        })

        setTodos(updateTodo)
    }

    function editSubmit(id){
        const updateTodoss = [...todos].map((bago) => {
            if(bago.id === id){
                bago.title = editText
            }

            return bago
        })
        setTodos(updateTodoss)
        setEdit([])
        setEditText('')

    }
    return ( 
        <div className="main">
            <div className='main__holder'>
                <form onSubmit={submitHandler}>
                    <input type='text' onChange={(e) => setTodo(e.target.value)} value={todo}/>
                    
                    <button type='submit' className='plus__holder'>
                        <FontAwesomeIcon className='plus' icon={faPlusCircle}/>
                    </button>
                </form>
                <div className='main__title' style={{
                    textAlign: 'center',
                }}>todolist 😜 <br />
                    created by <span><a href="https://github.com/reydelshit" target="_blank" style={{
                    textDecoration: 'none',
                    color: 'hsl(172, 67%, 45%)'
                }}>reydel ocon</a></span>
                </div>
              <div className='main__body'>
                {todos.map((hey) =>  
                <div className={hey.status === true ? 'todoDone' : 'todoShit'} key={hey.id}>
                        {edit === hey.id ? 
                        (<input type='text' onChange={(e) => setEditText(e.target.value)} value={editText}></input>)
                        :  (<div className='todo__title'>{hey.title}</div>)}

                        <div className='todos__feature'>
                        <input type='checkbox' onChange={() => update(hey.id)} checked={hey.status}>
                        </input>
                        <button onClick={() => setEdit(hey.id)}>
                            <FontAwesomeIcon className='edit' icon={faEdit}/>
                        </button>
                            {edit === hey.id ?
                        (<button onClick={() => editSubmit(hey.id)}>
                            <FontAwesomeIcon className='submit' icon={faPaperPlane}/>
                        </button>)
                             : 
                        (<button onClick={() => remove(hey.id)}>
                         <FontAwesomeIcon className='trash' icon={faTrash}/>
                         </button>)} 
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        
     );
}
 
export default App;