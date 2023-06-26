import React, {useState} from 'react'
import TodoForm from './TodoForm';
import { FontAwesomeIcon }from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';





function Todo({todos, completeTodo, editTodo,deleteTodo,updateTodo}) {

    const [edit , setEdit]= useState({
  
        id:null,
        value:''
    
    })

    const submitUpdate= value =>{
        updateTodo=(edit.id , value)
        setEdit({
            id:null,
            value:''
        });
    };

    if(edit.id){
        return <TodoForm edit ={edit} onSubmit={submitUpdate}/>
    }



  return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo-row complete':'tode-row'} key={index}>
          
          <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            {/* <FontAwesomeIcon icon = {faPenToSquare} onClick={()=>editTodo(todo.id)} /> */}
            <FontAwesomeIcon icon = {faPenToSquare} onClick={()=>setEdit({id:todo.id, value:todo.text})} className='edit-icon'/>
        <FontAwesomeIcon icon = {faTrash} onClick={()=> deleteTodo(todo.id)} className="delete-icon"/>

          </div>
            </div>
    ))
    
}

export default Todo
