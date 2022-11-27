import "./Button.css"

export default function Button (props) {
    return (
        <button className={props.whichType} id={props.id} >{props.children}</button>
    )
};

// whichType is to choose if Primary Secondary or other colors style