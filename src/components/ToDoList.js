import React from 'react';
import Item from './Item'


const ToDoList = (props) => {

    
    const toDoList = props.toDoList.map(it => (
        <Item key={it} text={it}/>
    ))


    return (
            <ul>
               {toDoList}
            </ul>
    );
    
}

export default ToDoList;