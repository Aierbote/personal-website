import { useState } from "react";
import "./ToDoList.css"
import InputOrElse from "../InputOrElse/InputOrElse";
import TodoTask from "../TodoTask/TodoTask";

export default function ToDoList () {
    // let todoTasks = [];
    const [todo, setTodo] = useState("");
    const [todoTasks, setTodoTasks] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`handleSubmit says :\ntodo ${todo}` );

        // todoTask.push(todo)  // NOTE : any state is not a normal value, so it cannot be pushed
        // todoTasks = [ ...todoTasks, todo]  // NOT YET CORRECT if todoTasks is an array
        let _list = [ ...todoTasks, todo]  // NOT YET CORRECT
        setTodoTasks(_list);

        // This will reset the input text with nothing after the task/todo is submitted
        // BUT REMEMBER TO SAVE THE TODO_STATE by adding a value={todo} in the input
        setTodo("");

    };

    const handleTodo = (e) => {
        // DEBUG :
        console.log("handleTodo " + e.target.value);
        setTodo(e.target.value);


        // console.log("handleTodo " + e.target.value);

        // // TODO : HOW DO I GET THE ENTER KEY STROKE  maybe with onKeyDown
        // if (todo == "enter" ) {
        // };
    };

    return (
        <div id="todo-list">
            {/* onSubmit works just for <form> */}
            <form id="todo-form" onSubmit={ handleSubmit }>
                {/* The simple way */}
                {/* <div>
                    <label htmlFor="todo">Add a task</label>
                    <input type="text" value={todo} onChange={handleTodo} id="todo"/>
                </div>
                <button type="submit" id="todo-submit"> Add..</button> */}

                {/* The component way */}
                {/* NOTE : now it works , but I had to change the default html value with the pros I created inside the component file
                from value to inValue
                */}
                <InputOrElse inValue={todo} children="Add A Task" inType="text" id="todo" inName="todo" onChange={ handleTodo } inPlaceH="A task, e.g. laundry..." />
                <InputOrElse inType="submit" id="todo-submit" inValue="Add..." />
            </form>
            {/* TODO : non yet created a component or a function to add one by one all the items with a map */}
            <div id="todo-task">
                {/* THIS IS HOW TO "FOREACH"/"MAP" */}
                {/* IT'S IMPORTANT TO GIVE THE KEY ATTRIBUTE FOR THE MAP */}
                {/* {todoTasks.map( (elem, i) => <div key={i}>{elem}</div>) } */}

                <TodoTask taskList={todoTasks} />
            </div>
        </div>
    )
};