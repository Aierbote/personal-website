import Button from "../Button/Button"

export default function TodoTask ( {taskList} ) {
    return (
        <ul id="todo-tasks">
            {taskList.map( (elem, i) => { return <li key={i}><span>{elem}</span></li>}
            )}
        </ul>
    )
};