import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default function TodoList() {

    const [todos, setTodos] =useState([])

    const addTodo= todo =>{
        if(!todo.text || /^\s*$/.test(todo.test)){
            return
        }
        const newTodos= [...todos, todo]
        setTodos(newTodos)
        console.log(...todos)
    }

    const deleteTodo=id => {
        const removeArr=[...todos].filter(todo=>todo.id !==id)
        setTodos(removeArr)
    }

    const updateTodo= (id, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.test)){
            return
        
    }
    // eslint-disable-next-line no-undef
    setTodos(prev => prev.map(item.id === id ? newValue : item))
}

    const completeTodo = (id) =>{
      let updatedTodos = todos.map(todo =>{
        if(todo.id===id){
            todo.isComplete = !todo.isComplete
        }
        return todo
    })
    setTodos(updatedTodos)
    }


    
    
    return (
    <div>
        <h1>what's the plan for today</h1>
        <TodoForm onSubmit={addTodo}/>
        <Todo todos ={todos} completeTodo = {completeTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}/>
    </div>
  )
}
