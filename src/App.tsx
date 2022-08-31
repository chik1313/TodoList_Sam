import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


export type FilteredType = "all" | "active" | "completed";

function App() {
    const TodolistTitle = "What to learn?"
    let [tasks1, setTasks] = useState<Array<TaskType>>([
            {id: 1, checked: true, title: "HTML&CSS"},
            {id: 2, checked: true, title: "React/Redux"},
            {id: 3, checked: false, title: "JS"}
        ]
    )
    const [filter, setFilter] = useState<FilteredType>("all")

    const removeTask = (tasksID: number) => {
        tasks1 = tasks1.filter(taska => taska.id !== tasksID)
        setTasks(tasks1)
    }


    const PropertiesForTodoList = () => {
        switch (filter) {
            case "active":
                return tasks1.filter(taska => taska.checked === false)
            case "completed":
                return tasks1.filter(taska => taska.checked === true)
            case "all":
                return tasks1
        }
    }

    let ButtonTodolist = (filter:FilteredType) => {
        setFilter(filter)
    }

    return (
        <div className="App">
            <TodoList title={TodolistTitle}
                      tasks={PropertiesForTodoList()}
                      removeTask={removeTask}
                      ButtonTodolist={ButtonTodolist}/>

        </div>
    )
}


export default App;
