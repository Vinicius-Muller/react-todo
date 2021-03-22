import React from 'react';
import './index.css';
import Check from '../../assets/checked.svg';

function Task({item, finishTask, index}) {

    return (
        <div className='task-box'>
            <p>{item.title}</p>
            <span onClick={() => finishTask(index)}>
                <img src={Check} alt={item.title}/>
            </span>
        </div>
    )
}

export default Task;