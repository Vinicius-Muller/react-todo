import React, {useState} from 'react';
import Task from '../task';
import './index.css';

function Tasks()  {

 const [task, setTask] = useState();
 const [taskList, setTaskList] = useState([]);
 const [componentUpdate, setComponentUpdate] = useState(false);

 function handleTwoWayData(e) {
    setTask({
        title:`${e.target.value}`,
        id:Math.random()
    })
 }
 

 function handleAddTaskToList() {
    let newTask = task;

    let newList = [...taskList, newTask];

    setTaskList(newList);
    setTask();
    setComponentUpdate(true);
 }

 
 function finishTask(index) {
    taskList.splice(index,1)
     setComponentUpdate(false)
     setTimeout(() => {
         setComponentUpdate(true)
     }, 1)
 }

    return (
        <div className='list-wrapper'>
            <h1>Planeje seu Dia</h1>
            <div className='search-box'>
                <input type='text' onChange={handleTwoWayData}
                 placeholder='O que você precisa fazer hoje?'/>
                <button onClick={handleAddTaskToList}>+</button>
            </div>
            {componentUpdate === true &&
                <div className='tasks-box'>
        
                    {taskList.map((item, index)=>(   

                    <Task key={item.id.toString()} 
                    item={item} finishTask={finishTask} 
                    taskList={taskList}
                    index={index}
                    />
                    ))}
        
                </div>
            }
        </div>
    )
}

export default Tasks;
