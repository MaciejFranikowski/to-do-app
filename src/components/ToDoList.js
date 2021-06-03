import React from 'react';
import Item from './Item'


const ToDoList = (props) => {

    
    const toDoList = props.toDoList.map(it => (
        <Item key={it} text={it}/>
    ))


    return (
        <div>
            <ul>
               {toDoList}
            </ul>
            <button onClick={props.adder}>Update posts</button>
        </div>
            
    );
    
}

export default ToDoList;