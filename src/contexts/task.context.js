import React, {createContext, useState} from 'react';
import useLocalStorageState from '../Hooks/UseLocalStorageState'
import uuid from 'uuid/v4'
// import {useLocalStorageReducer} from '../Hooks/useLocalStorageReducer'
// import taskReducer from '../reducers/task.reducer'

const defaultTasks = [
    {task: "Sample Task", pomTotal: 1, pomsCompleted: 0, id: "sadf3455-sdfg33"},
    {task: "Another Sample Task", pomTotal: 2, pomsCompleted: 1, id: "hsdjlhf3445-343jjjl"}
]
export const TasksContext = createContext()
// export const DispatchContext = createContext()

export const TasksProvider = props => {
   const [tasks, setTasks] = useLocalStorageState('tasks', defaultTasks)
   const [taskSelected, changeTaskSelected] = useState(null)
   
const addTask = (taskName, poms) => {
    const newTask = {
           id: uuid(),
           task: taskName,
           pomTotal: poms,
           pomsCompleted: 0,
       }
       setTasks([...tasks, newTask])
   }

const changeTaskName = (name, id) => {
    const revisedTaskList = tasks.map(task => (
        task.id === id? {...task, task : name} : task
    ));
    setTasks(revisedTaskList)
}

const deleteTask = (id) => {
    const revisedTaskList = tasks.filter(task => task.id !== id);
    setTasks(revisedTaskList);     
}

const finishPom = (id) => {
    setTasks(tasks.map(task => 
        task.id === id? {
            id: task.id, 
            task: task.task,
            pomTotal: task.pomTotal,
            pomsCompleted: task.pomsCompleted + 1,
        }
        :
        task
        ))
}

return(
    <TasksContext.Provider value={{tasks, addTask, changeTaskName, deleteTask, taskSelected, changeTaskSelected, finishPom}} >
            {props.children}
    </TasksContext.Provider>
);
}
