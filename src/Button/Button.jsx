import "./Button.css"

export default function Button (props) {
    return (
        <button className={props.whichType} id={props.id} >{props.children}</button>
    )
};