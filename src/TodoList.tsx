import React from 'react';
import {FilteredType} from "./App";


type TodolistTypesTitle = {
    title: string
    tasks: Array<TaskType>
    removeTask: (tasksID: number) => void
    ButtonTodolist: (filter:FilteredType) => void
}

export type TaskType = {
    id: number
    title: string
    checked: boolean
}



const TodoList = (props: TodolistTypesTitle) => {
    const TasksProperties = props.tasks.map(taska => {
            return (
                <li key={taska.id}>
                    <input type="checkbox" checked={taska.checked}/>
                    <span>{taska.title}</span>
                    <button onClick={() => props.removeTask(taska.id)}>Delete</button>
                </li>
            )
        }
    )
    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <input/>
                <button>+</button>
                <ul>
                    {TasksProperties}
                </ul>
                <button onClick={()=> props.ButtonTodolist('all')}>all</button>
                <button onClick={()=> props.ButtonTodolist("active")}>active</button>
                <button onClick={()=> props.ButtonTodolist("completed")}>completed</button>
            </div>
        </div>
    );
};

export default TodoList;
