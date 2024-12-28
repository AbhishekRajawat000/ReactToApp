import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default function Todo(){
    let [tasks, setTasks] = useState([{task: "sample task", id: uuidv4(), isdone:false}]);    
    let [newtodo, setNewTodo] = useState('');
    
    let addTask = () => {
       setTasks((preTasks)=>{
        return [...preTasks, {task: newtodo, id: uuidv4(), isdone:false}]
       });
       setNewTodo('');
    }
     
    let updatetodoValue = (event) =>{
       return setNewTodo(event.target.value);
    }

    let deleteTask =(id) => {
        setTasks(tasks.filter((t) => t.id !== id))
    }

    let markAllAsDone = () => {
        setTasks(tasks.map((task) => {
            return {
                ...task, isDone : true
            }
          }))
        }

       let markAsDone = (id) => {
        setTasks(tasks.map((task) => {
            if(task.id === id){
                return {
                    ...task, isDone : !task.isDone
                  }

            }else{
                return task;
            }
        }))
     }
            
          
    return(
        <div>
            <input 
            placeholder="Enter task" 
            value={newtodo}
            onChange={updatetodoValue}
            onKeyDown ={(event) =>{
                if(event.key === 'Enter'){
                    addTask();
                }
            }}>
            </input>
            <button onClick={addTask}>Add Task</button>
            <br /><br />
            <h4>ToDo List</h4>
            <hr />
            <ul>
                {tasks.map((task) => 
                <li key={task.id}>
                    <span style = {task.isDone ? {textDecoration: "Line-through"} : {}}>{task.task}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    <button onClick={() => markAsDone(task.id)}>MarkAsDone</button>
                    </li>)}
            </ul>

            <button onClick={markAllAsDone}>markAllAsDone</button>
        </div>
    )
}
              
                