import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

function List(props) {

    let [style,setStyle]=useState(props.line);
    
    let [display,setDisplay]=useState('');
    
    function removeList(){
        setDisplay('none')
    }
    
    function setCSS(){
        setStyle("line-through")
    }
    return (
        <div className="todo" style={{display:display}}>
            <li className='todo-item' style={ {textDecoration:style}}>{props.task}</li>
           
            <button className='complete-btn'onClick={setCSS} >
            <DoneIcon />
            </button>
            <button className='trash-btn' onClick={removeList} >
                <DeleteIcon />
            </button>
            
        </div>
    )
}

export default List