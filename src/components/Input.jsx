import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

import List from './List'


function Input() {

    const [item, setItem] = useState('');
    const [arr,setArr]=useState([]);
    const[status,setStatus]=useState('');


   
    function onChange(e) {
        setItem(e.target.value)
    }

    function addItem() {
        setArr((x)=>[
                ... x,{
                    list:item,
                    style:status
                }
        ])
        setItem('')
        setStatus("none")
    }

    function tasks(e){
      
              (e.target.value==="completed")?  setStatus("line-through"): setStatus("none")

    }


    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>

           <div className='forms'>
            <input type="text" className="todo-input" onInput={onChange} value={item} style={{ textDecoration:status}} />
            <button className="todo-button" type='submit' onClick={addItem} >
                <AddIcon />
            </button>
            <div className="select" >
                <select name="todos" className="filter-todo" onClick={tasks} >
                    <option value="completed" onClick={tasks} >Completed</option>
                    <option value="uncompleted"  onClick={tasks}>Uncompleted</option>
                </select>
            </div>

            </div>


            <div className="todo-container">
                <ul className="todo-list">{
                    arr.map((todo,i) =>  
                     <List
                     key={i} 
                     task={todo.list}
                      line={todo.style}
                      />)
                }

                </ul>
            </div>



        </div>
    );
}
///////////////////////////////////////////
export default Input;

