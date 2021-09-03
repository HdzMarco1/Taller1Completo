import React,{useState} from 'react';
import Todo from '../components/Todo';
import "bootstrap/dist/css/bootstrap.min.css"
const Form = () => {

    const prueba =[
        {
            nombre: "Manzana",
            precio: 0.50,
            cantidad: 1
        },
        {
            nombre: "pera",
            precio: 0.75,
            cantidad: 1
        },  
        {
            nombre: "sandia",
            precio: 0.80,
            cantidad: 1
        },  
        {
            nombre: "uvas",
            precio: 1.50,
            cantidad: 1
        },  
        {
            nombre: "coca cola",
            precio: 0.40,
            cantidad: 1
        },  
        {
            nombre: "maruchan",
            precio: 0.75,
            cantidad: 1
        },  
        {
            nombre: "negrito bimbo",
            precio: 0.25,
            cantidad: 1
        },  
        {
            nombre: "tres leches",
            precio: 1.0,
            cantidad: 1
        },  
        {
            nombre: "cafe",
            precio: 0.25,
            cantidad: 1
        },  
        {
            nombre: "agua",
            precio: 0.75,
            cantidad: 1
        }
    ]
    


    const rederPrice =() => {
        //console.log(todos)
        let suma = 0;
        todos.forEach(valor => suma += valor.cantidad*valor.precio);
        return(
            <div class="container" id="total">Total: ${suma.toFixed(2)}</div>
        )
    }
    

    const [todo, setTodo] = useState({})

    const [todos, setTodos] = useState([
        // {todo: 'todo 1'},
        // {todo: 'todo 2'},
        // {todo: 'todo 3'}
    ])


    const handleChange = e => {
        let objeto = prueba[e];
        if(objeto === undefined){
            alert("seleccione una obcion valida")
        }else{
            console.log(objeto);
            setTodo(objeto);
        }
    }
       
    const editTodo = (cantidad,index) => {
        const newTodos = [...todos];
        newTodos.map((x,k) => x.cantidad = k === index ? cantidad : x.cantidad);
        setTodos(newTodos);
      }

    const handleClick = e => {
            //console.log(todo); 
            setTodos([...todos, todo]);
            //console.log(todo);
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1);
        setTodos(newTodos)
    }
    return (
        <>
        <div class="container">
            <form onSubmit={e => e.preventDefault()} >
                <label>Lista de compras</label><br />
                <select name="todo" onChange={ (e) => handleChange(e.target.value) } class="form-select" aria-label="Default select example"  id="select"  required>
                    <option value={-1}>Seleccione una Opcion</option>
                    {
                        prueba.map((item, i)=>(
                            <option key={i} value={i}>{item.nombre} ${item.precio}</option>
                        ))
                    }
                </select>
                <button onClick={handleClick} class="btn btn-primary" id="boton">agregar</button>
            </form>
        </div>

        <table class="table table-striped table-hover" id="tabla">
        <tbody>
            <tr>
                {
                    todos.map((value, index) => (
                    <Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    ))
                        
                } 
            
            </tr>
        </tbody>
        <hr />
        </table>
         {rederPrice()}  
        </>
    )
}
export default Form