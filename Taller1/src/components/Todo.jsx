import React from 'react'
const Todo = ({todo, index, deleteTodo, editTodo}) => {

    //console.log(precio);



    return (
        <>
            <div>
                <td>
                <h4>{todo.nombre}</h4>  
                </td>
                
                 <td>
                <button class="btn btn-danger" id="botonElimi" onClick={()=> deleteTodo(index)}>x</button>
                <input type="number" id="numero" min="1" defaultValue="1" onChange={ (e) => editTodo(e.target.value, index) }/>
                </td>
                <h6> ${todo.precio}</h6>
                <hr />
                
                
            </div>
        </>
    )
    
}
export default Todo
